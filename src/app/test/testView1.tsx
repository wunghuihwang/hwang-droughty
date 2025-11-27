'use client';

import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { useMutation } from '@tanstack/react-query';

import { deleteTestQuery, getTestQuery, postTestQuery, updateTestQuery } from '../../query/test';
import useSupabaseBrowser from '../supabase-browser';

const TestView = () => {
    const supabase = useSupabaseBrowser();

    const { data: testData, refetch: isTestDataRefetch } = useQuery(getTestQuery(supabase));
    const insertMutation = useMutation({
        mutationFn: (payload: { test_data_1: number; test_data_2?: string | null; test_data_3?: string | null }) =>
            postTestQuery(supabase, payload),

        onSuccess: () => {
            console.log('Insert 성공');
            isTestDataRefetch();
        },
        onError: (err) => {
            console.error('Insert 실패:', err);
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (rowNum: number) => deleteTestQuery(supabase, rowNum),

        onSuccess: () => {
            console.log('Delete 성공');
            isTestDataRefetch();
        },
        onError: (err) => {
            console.error('Delete 실패:', err);
        },
    });

    const updateMutation = useMutation({
        mutationFn: ({ rowNum, payload }: { rowNum: number; payload: any }) =>
            updateTestQuery(supabase, rowNum, payload),

        onSuccess: () => {
            console.log('Update 성공');
            isTestDataRefetch();
        },
    });

    const handleAdd = () => {
        if (window.confirm('정말 추가하시겠습니까?')) {
            insertMutation.mutate({
                test_data_1: 999,
                test_data_2: 'hello',
                test_data_3: 'world',
            });
        }
    };

    const handleDelete = (rowNum: number) => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            deleteMutation.mutate(rowNum);
        }
    };
    return (
        <>
            <button onClick={handleAdd} disabled={insertMutation.isPending}>
                {insertMutation.isPending ? 'Sending...' : 'Send Data'}
            </button>

            <div>
                {testData?.map((item) => (
                    <div
                        key={item.row_num}
                        style={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center',
                            marginBottom: '5px',
                        }}
                    >
                        <span>
                            {item.test_data_1} : {item.test_data_2} {item.test_data_3}
                        </span>

                        <button
                            onClick={() => handleDelete(item.row_num)}
                            disabled={deleteMutation.isPending}
                            style={{
                                padding: '4px 8px',
                                background: '#ef4444',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            삭제
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TestView;
