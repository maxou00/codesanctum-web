import { create, createStore } from "zustand";
import { client } from "../core";
import { MeQuery, MeQueryVariables, SigninWithGithubMutation, SigninWithGithubMutationVariables, SigninWithGoogleMutation, SigninWithGoogleMutationVariables } from "@/core/gql/graphql";
import { GET_ME } from "@/core/queries";
import { MUTATION_SIGNIN_WITH_GITHUB, MUTATION_SIGNIN_WITH_GOOGLE } from "@/core/mutations";

interface UserState {
    isLoading: boolean;
    user?: any;
    refresh: () => Promise<void>;
    loginWithGoogle: (accessToken: string) => Promise<void>;
    loginWithGithub: (code: string) => Promise<void>;
    logout: () => any;
}

export const useUser = create<UserState>((set, get) => {
    return {
        isLoading: true,
        user: undefined,
        async refresh() {
            set({ isLoading: true });
            await client.query<MeQuery, MeQueryVariables>({ query: GET_ME })
                .then((result) => {
                    if (result.data?.me?.id) {
                        set({ user: result.data.me, isLoading: false });
                    }
                })
                .finally(() => {
                    set({ isLoading: false })
                })
        },
        async loginWithGoogle(access_token: string) {
            set({ isLoading: true });
            await client.mutate<SigninWithGoogleMutation, SigninWithGoogleMutationVariables>({ mutation: MUTATION_SIGNIN_WITH_GOOGLE, variables: { accessToken: access_token } })
                .then((result) => {
                    if (result.data?.signinWithGoogle) {
                        let { user, accessToken } = result.data.signinWithGoogle;
                        if (user && accessToken) {
                            localStorage.setItem("accessToken", accessToken);
                            set({ user: user, isLoading: false });
                        }
                    }
                })
                .finally(() => {
                    set({ isLoading: false })
                })
        },
        async loginWithGithub(code) {
            set({ isLoading: true });
            await client.mutate<SigninWithGithubMutation, SigninWithGithubMutationVariables>({ mutation: MUTATION_SIGNIN_WITH_GITHUB, variables: { code: code } })
                .then((result) => {
                    if (result.data?.signinWithGithub) {
                        let { user, accessToken } = result.data.signinWithGithub;
                        if (user && accessToken) {
                            localStorage.setItem("accessToken", accessToken);
                            set({ user: user, isLoading: false });
                        }
                    }
                })
                .finally(() => {
                    set({ isLoading: false })
                })
        },
        logout() {
            localStorage.removeItem("accessToken");
            set({ user: undefined, isLoading: false });
        },
    }
})