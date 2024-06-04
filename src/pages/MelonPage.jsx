import React from 'react';
import Chart from '../components/Chart';
import useFetchData from '../hook/useFetchData';

const MelonPage = () => {
    const { data, loading } = useFetchData(`https://raw.githubusercontent.com/HwangInJi/music-best/main/melon/melon100_2024-06-04.json`);

    return (
        <>
            {loading ? (
                <div>
                    로딩중.....
                </div>
            ) : (
                <Chart title="🍈 멜론 차트 top100" musicList={data} />
            )}
        </>
    );
}

export default MelonPage;