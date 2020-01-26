import { takeLatest, put, all, call } from 'redux-saga/effects';
import * as userSaga from './user.sagas';
import UserActionTypes from './user.types';
import { auth,
         createUserProfileDocument,
         updateUserProfileDocument,
         updateUserPassword,
         getCurrentUser } from '../../firebase/firebase.utils';

import { signInSuccess, 
         signInFailure, 
         signOutSuccess, 
         signOutFailure,
         signUpSuccess,
         signUpFailure,
         updateNameSuccess,
         updateNameFailure,
         updateEmailSuccess,
         updateEmailFailure,
         updatePasswordSuccess,
         updatePasswordFailure } from '../user/user.actions';

import { errorMessage, sampleUserId, detectMobile } from '../../utils/utils';

describe('on google sign in start saga', () => {
  it('should trigger on GOOGLE_SIGN_IN_START', () => {
    const generator = userSaga.onGoogleSignInStart();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        userSaga.signInWithGoogle
      )
    );
  });
});

describe('on email sign in start saga', () => {
  it('should trigger on EMAIL_SIGN_IN_START', () => {
    const generator = userSaga.onEmailSignInStart();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        userSaga.signInWithEmail
      )
    );
  });
});

describe('on check user session saga', () => {
  it('should trigger on CHECK_USER_SESSION', () => {
    const generator = userSaga.onCheckUserSession();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.CHECK_USER_SESSION,
        userSaga.isUserAuthenticated
      )
    );
  });
});

describe('on sign out start saga', () => {
  it('should trigger on SIGN_OUT_START', () => {
    const generator = userSaga.onSignOutStart();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.SIGN_OUT_START,
        userSaga.signOut
      )
    );
  });
});

describe('on email sign up start saga', () => {
  it('should trigger on SIGN_OUT_START', () => {
    const generator = userSaga.onSignUpStart();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.SIGN_UP_START,
        userSaga.signUp
      )
    );
  });
});

describe('on email sign up success saga', () => {
  it('should trigger on SIGN_UP_SUCCESS', () => {
    const generator = userSaga.onSignUpSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.SIGN_UP_SUCCESS,
        userSaga.signInAfterSignUp
      )
    );
  });
});

describe('on update name start saga', () => {
  it('should trigger on UPDATE_NAME_START', () => {
    const generator = userSaga.onUpdateNameStart();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.UPDATE_NAME_START,
        userSaga.updateName
      )
    );
  });
});

describe('on update email start saga', () => {
  it('should trigger on UPDATE_EMAIL_START', () => {
    const generator = userSaga.onUpdateEmailStart();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.UPDATE_EMAIL_START,
        userSaga.updateEmail
      )
    );
  });
});

describe('on update password start saga', () => {
  it('should trigger on UPDATE_PASSWORD_START', () => {
    const generator = userSaga.onUpdatePasswordStart();
    expect(generator.next().value).toEqual(
      takeLatest(
        UserActionTypes.UPDATE_PASSWORD_START,
        userSaga.updatePassword
      )
    );
  });
});

describe('getSnapshotFromUserAuth', () => {
  const mockUserAuth = {};
  const mockAdditionalData = {};
  const mockError = 'There was an error.';
  const generator = userSaga.getSnapshotFromUserAuth(mockUserAuth, mockAdditionalData);
  const mockSnapShot = {
    id: '1w123e343rrsa',
    data: () => {
      return {displayName: 'Sample User'};
    }
  };

  const mockUserRef = {
    get: () => {
      return mockSnapShot;
    }
  };
  
  it('should call createUserProfileDocument', () => {
    expect(generator.next().value).toEqual(
      call(createUserProfileDocument, mockUserAuth, mockAdditionalData)
    );
  });

  it('should get user snapshot', () => {
    expect(generator.next(mockUserRef).value).toEqual(mockSnapShot);
  });

  it('should fire signInSuccess', () => {
    expect(generator.next(mockSnapShot).value).toEqual(
      put(signInSuccess({ id: mockSnapShot.id, ...mockSnapShot.data() }))
    );
  });

  it('should fire signInFailure', () => {
    const newGenerator = userSaga.getSnapshotFromUserAuth(mockUserAuth, mockAdditionalData);
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put(signInFailure(mockError))
    );
  });
});

describe('signInWithGoogle', () => {
  const mockUserAuth = {
    user: {
      uid: '123456'
    }
  };

  const mockError = 'There was an error.';
  const generator = userSaga.signInWithGoogle();

  it('should call detectMobile', () => {
    expect(generator.next().value).toEqual(
      call(detectMobile)
    );
  });

  it('should call signInWithRedirect if mobile browser detected', () => {
    const newGenerator = userSaga.signInWithGoogle();
    const signInWithRedirect = jest.spyOn(auth, 'signInWithRedirect');
    newGenerator.next();
    newGenerator.next(true);
    expect(signInWithRedirect).toHaveBeenCalled();
  });
  
  it('should call signInWithPopup if mobile browser is not', () => {
    const signInWithPopup = jest.spyOn(auth, 'signInWithPopup');
    generator.next(false);
    expect(signInWithPopup).toHaveBeenCalled();
  });

  it('should call getSnapshotFromUserAuth', () => {
    const { user } = mockUserAuth;
    expect(generator.next(mockUserAuth).value).toEqual(
      call(userSaga.getSnapshotFromUserAuth, user)
    );
  });

  it('should fire signInFailure', () => {
    const newGenerator = userSaga.signInWithGoogle();
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put(signInFailure(mockError))
    );
  });
});

describe('signInWithEmail', () => {
  const mockUserAuth = {
    user: {
      uid: '123456'
    }
  };

  const mockPayload = {
    payload: {
      email: 'sampleuser@example.com',
      password: '123456'
    }
  };
  const mockError = 'There was an error.';
  const generator = userSaga.signInWithEmail(mockPayload);
  
  it('should call signInWithEmailAndPassword', () => {
    const signInWithEmailAndPassword = jest.spyOn(auth, 'signInWithEmailAndPassword');
    generator.next();
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  it('should call getSnapshotFromUserAuth', () => {
    const { user } = mockUserAuth;
    expect(generator.next(mockUserAuth).value).toEqual(
      call(userSaga.getSnapshotFromUserAuth, user)
    );
  });

  it('should fire signInFailure', () => {
    const newGenerator = userSaga.signInWithEmail(mockPayload);
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put(signInFailure(mockError))
    );
  });
});

describe('isUserAuthenticated', () => {
  const mockUserAuth = {
    user: {
      uid: '123456'
    }
  };

  const mockEmptyUserAuth = null;
  const mockError = 'There was an error.';
  const generator = userSaga.isUserAuthenticated();
  
  it('should call getCurrentUser', () => {
    expect(generator.next().value).toEqual(getCurrentUser());
  });

  it('should return if userAuth is empty', () => {
    const generator = userSaga.isUserAuthenticated();
    generator.next(mockEmptyUserAuth);
    expect(generator.next(mockEmptyUserAuth).value).toEqual(undefined);
  });

  it('should call getSnapshotFromUserAuth if user exists', () => {
    expect(generator.next(mockUserAuth).value).toEqual(
      call(userSaga.getSnapshotFromUserAuth, mockUserAuth)
    );
  });

  it('should fire signInFailure', () => {
    const newGenerator = userSaga.isUserAuthenticated();
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put(signInFailure(mockError))
    );
  });
});

describe('signOut', () => {
  const mockError = 'There was an error.';
  const generator = userSaga.signOut();
  
  it('should call signOut', () => {
    const signOut = jest.spyOn(auth, 'signOut');
    generator.next();
    expect(signOut).toHaveBeenCalled();
  });

  it('should call signOutSuccess', () => {
    expect(generator.next().value).toEqual(
      put(signOutSuccess())
    );
  });

  it('should fire signOutFailure', () => {
    const newGenerator = userSaga.signOut();
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put(signOutFailure(mockError))
    );
  });
});

describe('signUp', () => {
  const mockUserAuth = {
    user: {
      uid: '123456'
    }
  };

  const mockPayload = {
    payload: {
      displayName: 'Sample User',
      email: 'sampleuser@example.com',
      password: '123456'
    }
  };
  const mockError = 'There was an error.';
  const generator = userSaga.signUp(mockPayload);
  
  it('should call createUserWithEmailAndPassword', () => {
    const createUserWithEmailAndPassword = jest.spyOn(auth, 'createUserWithEmailAndPassword');
    generator.next();
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('should call signUpSuccess', () => {
    const { user } = mockUserAuth;
    const displayName = mockPayload.payload.displayName;
    expect(generator.next(mockUserAuth).value).toEqual(
      put(signUpSuccess({ user, displayName }))
    );
  });

  it('should fire signUpFailure', () => {
    const newGenerator = userSaga.signUp(mockPayload);
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put(signUpFailure(mockError))
    );
  });
});

describe('signInAfterSignUp', () => {
  const mockUserAuth = {
    user: {
      uid: '123456'
    }
  };

  const mockPayload = {
    payload: {
      displayName: 'Sample User',
      user: {
        uid: '123456'
      }
    }
  };
  const generator = userSaga.signInAfterSignUp(mockPayload);

  it('should call getSnapshotFromUserAuth', () => {
    const user = mockPayload.payload.user;
    const displayName = mockPayload.payload.displayName;
    expect(generator.next(mockUserAuth).value).toEqual(
      call(userSaga.getSnapshotFromUserAuth, user, { displayName })
    );
  });
});

describe('updateName', () => {
  const mockUserAuth = {
    user: {
      uid: '123456'
    }
  };

  const mockSnapShot = {
    id: '1w123e343rrsa',
    data: () => {
      return {displayName: 'Sample User'};
    }
  };

  const mockUserRef = {
    get: () => {
      return mockSnapShot;
    }
  };

  const mockSampleUser = {
    user: {
      uid: sampleUserId
    }
  };

  const mockPayload = {
    payload: {
      displayName: 'Sample User',
      ownProps: {
        history: {
          push: jest.fn()
        }
      }
    }
  };
  const mockError = 'There was an error.';
  const generator = userSaga.updateName(mockPayload);
  
  it('should call getCurrentUser', () => {
    expect(generator.next().value).toEqual(getCurrentUser());
  });

  it('should throw error if user is sample user', () => {
    const generator = userSaga.updateName(mockPayload);
    generator.next();
    expect(generator.next(mockSampleUser.user).value).toEqual(
      put(updateNameFailure(Error(errorMessage)))
    );
  });

  it('should call updateUserProfileDocument if user is not sample user', () => {
    const user = mockUserAuth;
    const displayName = mockPayload.payload.displayName;
    expect(generator.next(mockUserAuth).value).toEqual(
      call(updateUserProfileDocument, user, { displayName })
    );
  });

  it('should get user snapshot', () => {
    expect(generator.next(mockUserRef).value).toEqual(mockSnapShot);
  });

  it('should call updateNameSuccess', () => {
    expect(generator.next(mockSnapShot).value).toEqual(
      put(updateNameSuccess({ id: mockSnapShot.id, ...mockSnapShot.data() }))
    );
  });

  it('should call history.push', () => {
    const ownProps = mockPayload.payload.ownProps;
    expect(generator.next().value).toEqual(
      call(ownProps.history.push, '/account')
    );
  });

  it('should fire updateNameFailure', () => {
    const newGenerator = userSaga.updateName(mockPayload);
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put(updateNameFailure(mockError))
    );
  });
});

describe('updateEmail', () => {
  const mockUserAuth = {
    user: {
      uid: '123456'
    }
  };

  const mockSnapShot = {
    id: '1w123e343rrsa',
    data: () => {
      return {displayName: 'Sample User'};
    }
  };

  const mockUserRef = {
    get: () => {
      return mockSnapShot;
    }
  };

  const mockUserRefWithError = {
    error: 'There was an error'
  };

  const mockSampleUser = {
    user: {
      uid: sampleUserId
    }
  };

  const mockPayload = {
    payload: {
      email: 'sampleuser@example.com',
      password: '123456',
      ownProps: {
        history: {
          push: jest.fn()
        }
      }
    }
  };
  const mockError = 'There was an error.';
  const generator = userSaga.updateEmail(mockPayload);
  
  it('should call getCurrentUser', () => {
    expect(generator.next().value).toEqual(getCurrentUser());
  });

  it('should throw error if user is sample user', () => {
    const generator = userSaga.updateEmail(mockPayload);
    generator.next();
    expect(generator.next(mockSampleUser.user).value).toEqual(
      put(updateEmailFailure(Error(errorMessage)))
    );
  });

  it('should call updateUserProfileDocument if user is not sample user', () => {
    const user = mockUserAuth;
    const email = mockPayload.payload.email;
    const password = mockPayload.payload.password;
    expect(generator.next(mockUserAuth).value).toEqual(
      call(updateUserProfileDocument, user, { email, password })
    );
  });

  it('should throw error if updateUserProfileDocument returns an error', () => {
    const generator = userSaga.updateEmail(mockPayload);
    generator.next();
    generator.next(mockUserRefWithError)
    expect(generator.next(mockUserRefWithError).value).toEqual(
      put(updateEmailFailure(Error(mockUserRefWithError.error)))
    );
  });

  it('should get user snapshot', () => {
    expect(generator.next(mockUserRef).value).toEqual(mockSnapShot);
  });

  it('should call updateEmailSuccess', () => {
    expect(generator.next(mockSnapShot).value).toEqual(
      put(updateEmailSuccess({ id: mockSnapShot.id, ...mockSnapShot.data() }))
    );
  });

  it('should call history.push', () => {
    const ownProps = mockPayload.payload.ownProps;
    expect(generator.next().value).toEqual(
      call(ownProps.history.push, '/account')
    );
  });

  it('should fire updateEmailFailure', () => {
    const newGenerator = userSaga.updateEmail(mockPayload);
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put(updateEmailFailure(mockError))
    );
  });
});

describe('updatePassword', () => {
  const mockUserAuth = {
    user: {
      uid: '123456'
    }
  };

  const mockSnapShot = {
    id: '1w123e343rrsa',
    data: () => {
      return {displayName: 'Sample User'};
    }
  };

  const mockUserRef = {
    get: () => {
      return mockSnapShot;
    }
  };

  const mockUserRefWithError = {
    error: 'There was an error'
  };

  const mockSampleUser = {
    user: {
      uid: sampleUserId
    }
  };

  const mockPayload = {
    payload: {
      oldPassword: '123456',
      newPassword: '1234567',
      ownProps: {
        history: {
          push: jest.fn()
        }
      }
    }
  };
  const mockError = 'There was an error.';
  const generator = userSaga.updatePassword(mockPayload);
  
  it('should call getCurrentUser', () => {
    expect(generator.next().value).toEqual(getCurrentUser());
  });

  it('should throw error if user is sample user', () => {
    const generator = userSaga.updatePassword(mockPayload);
    generator.next();
    expect(generator.next(mockSampleUser.user).value).toEqual(
      put(updatePasswordFailure(Error(errorMessage)))
    );
  });

  it('should call updateUserPassword if user is not sample user', () => {
    const user = mockUserAuth;
    const oldPassword = mockPayload.payload.oldPassword;
    const newPassword = mockPayload.payload.newPassword;
    expect(generator.next(mockUserAuth).value).toEqual(
      call(updateUserPassword, user, { oldPassword, newPassword })
    );
  });

  it('should throw error if updateUserPassword returns an error', () => {
    const generator = userSaga.updatePassword(mockPayload);
    generator.next();
    generator.next(mockUserRefWithError)
    expect(generator.next(mockUserRefWithError).value).toEqual(
      put(updatePasswordFailure(Error(mockUserRefWithError.error)))
    );
  });

  it('should get user snapshot', () => {
    expect(generator.next(mockUserRef).value).toEqual(mockSnapShot);
  });

  it('should call updatePasswordSuccess', () => {
    expect(generator.next(mockSnapShot).value).toEqual(
      put(updatePasswordSuccess({ id: mockSnapShot.id, ...mockSnapShot.data() }))
    );
  });

  it('should call history.push', () => {
    const ownProps = mockPayload.payload.ownProps;
    expect(generator.next().value).toEqual(
      call(ownProps.history.push, '/account')
    );
  });

  it('should fire updatePasswordFailure', () => {
    const newGenerator = userSaga.updatePassword(mockPayload);
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put(updatePasswordFailure(mockError))
    );
  });
});

describe('call user sagas', () => {
  const generator = userSaga.userSagas();
  it('should call all user sagas', () => {
    expect(generator.next().value).toEqual(
      all([
        call(userSaga.onGoogleSignInStart),
        call(userSaga.onEmailSignInStart),
        call(userSaga.onCheckUserSession),
        call(userSaga.onSignOutStart),
        call(userSaga.onSignUpStart),
        call(userSaga.onSignUpSuccess),
        call(userSaga.onUpdateNameStart),
        call(userSaga.onUpdateEmailStart),
        call(userSaga.onUpdatePasswordStart)
      ])
    );
  });
});