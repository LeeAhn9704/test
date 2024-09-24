import { api } from '@/api';
import { AcademyNoticeDetail } from '@/type/academy/notice';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
  datas: {
    idx: string;
    nextIdx: string;
    nextTitle: string;
    prevIdx: string;
    prevTitle: string;
  };
};

const AcademyNoticeDetail = ({ datas }: Props) => {
  //console.log('?!', datas);
  const router = useRouter();
  const { data, refetch } = useQuery<AcademyNoticeDetail>({
    queryKey: ['notice'],
    queryFn: () =>
      api({
        method: 'GET',
        url: `landing/notices/${datas.idx}`,
      }),
    throwOnError: false,
    enabled: false,
  });

  useEffect(() => {
    if (datas.idx) refetch();
  }, [datas.idx]);

  return (
    <_inner>
      <h3>
        <span>COMMUNITY</span>
      </h3>
      <_box>
        <div>
          <span>제목</span>
          <span>{data?.result?.resultData?.notice?.title}</span>
        </div>
        <_flexDiv>
          <div>
            <span>작성자</span>
            <span>{data?.result?.resultData?.notice?.writer}</span>
          </div>
          <div>
            <span>작성일</span>
            <span>
              {data?.result?.resultData?.notice?.createdAt.slice(0, 10)}
            </span>
          </div>
          {/* <div>
            <span>조회</span>
            <span></span>
          </div> */}
        </_flexDiv>
      </_box>
      <_content
        dangerouslySetInnerHTML={{
          __html: data?.result?.resultData?.notice?.content || '',
        }}
      />
      {/* <_box2>
        {datas.prevIdx && (
          <div>
            <span>이전글</span>
            <span onClick={() => router.push(``)}>{datas.prevTitle}</span>
          </div>
        )}
        {datas.nextIdx && (
          <div>
            <span>다음글</span>
            <span>{datas.nextTitle}</span>
          </div>
        )}
      </_box2> */}
      <_btn onClick={() => router.push('/academy/community/notice')}>
        목록으로
      </_btn>
    </_inner>
  );
};

export default AcademyNoticeDetail;

const _inner = styled.section`
  width: 1200px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 50px 16px;
  }
  min-height: 818px;
  @media (max-width: 900px) {
    min-height: 600px;
  }
  @media (max-width: 650px) {
    min-height: 485px;
  }
  @media (max-width: 500px) {
    padding: 50px 6px;
  }
  padding: 60px 90px 65px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 3px 2px 2px -2px rgba(0, 0, 0, 0.3);
  position: relative;
  border: 1px solid #e8e8e8;

  > h3 {
    display: block;
    font-size: 30px;
    color: #f04500;
    font-weight: 800;
    position: relative;
    margin-bottom: 45px;
    text-align: center;

    > span {
      position: relative;

      &::after {
        content: '';
        display: block;
        width: 35px;
        height: 1px;
        background: #222;
        position: absolute;
        left: 50%;
        top: 50px;
        transform: translateX(-50%);
      }
    }
  }
`;

const _box = styled.div`
  border-top: 1px solid;
  > div {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
    &:nth-last-of-type(1) {
      border-bottom: none;
    }
    > span {
      display: flex;
      min-height: 70px;
      padding: 10px 0;
      &:nth-of-type(1) {
        width: 140px;
        align-items: center;
        justify-content: center;
        @media (max-width: 600px) {
          width: 100px;
        }
        font-size: 14px;
        color: #222;
        font-weight: 600;
        background: #f9f9f9;
      }
      &:nth-of-type(2) {
        flex: 1;
        background-color: white;
        padding-left: 30px;
        align-items: center;
        @media (max-width: 600px) {
          padding-left: 10px;
        }
      }
      &.wrap {
        width: 100%;
        @media (max-width: 600px) {
          flex-direction: column;
        }
      }
    }
  }
`;

const _flexDiv = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  > div {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e8e8e8;

    > span {
      display: flex;
      min-height: 70px;
      padding: 10px 0;

      &:nth-of-type(1) {
        width: 140px;
        align-items: center;
        justify-content: center;
        @media (max-width: 600px) {
          width: 100px;
        }
        font-size: 14px;
        color: #222;
        font-weight: 600;
        background: #f9f9f9;
      }
      &:nth-of-type(2) {
        flex: 1;
        background-color: white;
        padding-left: 30px;
        align-items: center;
        @media (max-width: 600px) {
          padding-left: 10px;
        }
      }
      &.wrap {
        width: 100%;
        @media (max-width: 600px) {
          flex-direction: column;
        }
      }
    }
  }
`;

const _content = styled.div`
  min-height: 500px;
  padding: 30px;
  width: 100%;
  position: relative;
  img {
    max-width: 100% !important;
  }
`;

const _box2 = styled.div`
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  > div {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
    &:nth-last-of-type(1) {
      border-bottom: none;
    }
    > span {
      display: flex;
      min-height: 70px;
      padding: 10px 0;
      &:nth-of-type(1) {
        width: 140px;
        align-items: center;
        justify-content: center;
        @media (max-width: 600px) {
          width: 100px;
        }
        font-size: 14px;
        color: #222;
        font-weight: 600;
        background: #f9f9f9;
      }
      &:nth-of-type(2) {
        flex: 1;
        background-color: white;
        padding-left: 30px;
        align-items: center;
        @media (max-width: 600px) {
          padding-left: 10px;
        }
      }
      &.wrap {
        width: 100%;
        @media (max-width: 600px) {
          flex-direction: column;
        }
      }
    }
  }
`;

const _btn = styled.button`
  cursor: pointer;
  display: block;
  width: 159px;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  border-radius: 30px;
  margin: 80px auto 0;
  color: #555 !important;
  border: 1px solid #999;
`;
