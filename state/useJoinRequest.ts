import { JOIN_REQUEST_FORM_ID, client } from "@/core";
import { FormQuery, FormQueryVariables } from "@/core/gql/graphql";
import { GET_FORM } from "@/core/queries";
import { create } from "zustand";

type JoinRequestDataType = {
    isLoading: boolean;
    form?: FormQuery['form'];
    load: () => any;
}

export const useJoinRequest = create<JoinRequestDataType>((set, get) => {
    return {
        isLoading: false,
        form: undefined,
        async load() {
            set({ isLoading: true });
            await client.query<FormQuery, FormQueryVariables>({
                query: GET_FORM,
                variables: {
                    where: {
                        id: JOIN_REQUEST_FORM_ID
                    }
                }
            })
            .then((res) => {
                if(res.data?.form?.id) {
                    set({ form: res.data.form })
                }
                else {
                    set({ form: undefined });
                }
            })
                .finally(() => {
                    set({ isLoading: false });
                })
        },
    }
});