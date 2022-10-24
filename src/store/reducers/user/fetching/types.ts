

export interface InitialState {
    fetchSigninUser: { username: string, password: string } | null;
    fetchSignupUser:  { username: string, password: string } | null;
    fetchUser: string | null;
}