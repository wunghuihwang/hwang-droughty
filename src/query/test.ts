import { TypedSupabaseClient } from '../app/supabase';

export function getTestQuery(client: TypedSupabaseClient) {
    return client.from('test_table_1').select('*').order('row_num', { ascending: false });
}

export const postTestQuery = async (
    client: TypedSupabaseClient,
    payload: {
        test_data_1: number;
        test_data_2?: string | null;
        test_data_3?: string | null;
    },
) => {
    return client.from('test_table_1').insert([payload]).select();
};

export const deleteTestQuery = async (client: TypedSupabaseClient, rowNum: number) => {
    return client.from('test_table_1').delete().eq('row_num', rowNum);
};

export const updateTestQuery = async (
    client: TypedSupabaseClient,
    rowNum: number,
    payload: {
        test_data_1?: number;
        test_data_2?: string | null;
        test_data_3?: string | null;
    },
) => {
    return client.from('test_table_1').update(payload).eq('row_num', rowNum).select();
};
