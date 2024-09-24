import { api } from '@/api';
import { AcademyNotice, AcademyNoticeResult } from '@/type/academy/notice';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const PreviewNotice = () => {
  const router = useRouter();

  const { data, refetch } = useQuery<
    AcademyNotice,
    AxiosError,
    AcademyNoticeResult
  >({
    queryKey: ['notice'],
    queryFn: () =>
      api({
        method: 'GET',
        url: 'landing/notices',
        params: {
          page: 1,
          limit: 10,
        },
      }),
    select(data) {
      return data.result.resultData;
    },
  });

  return (
    <_wrap>
      {data?.notices.map((ele, idx) => {
        if (idx < 4) {
          return (
            <_li
              key={idx}
              onClick={() =>
                router.push(
                  `/academy/community/notice/detail?idx=${ele.noticeIdx}`,
                )
              }
            >
              <span>{ele.title}</span>
              <span>{ele.createdAt}</span>
              {/* TODO */}
            </_li>
          );
        } else {
          return '';
        }
      })}
    </_wrap>
  );
};

export default PreviewNotice;

const _wrap = styled.ol`
  width: 100%;
  padding: 10px 10px;
  position: relative;
`;

const _li = styled.li`
  cursor: pointer;
  font-size: 16px;
  color: #222;
  line-height: 1;
  letter-spacing: -0.06em;
  word-break: keep-all;
  padding: 15px 0;
  margin: 5px 0;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  > span {
    &:nth-of-type(1) {
      width: 200px;
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    &:nth-of-type(2) {
      width: 75px;
      @media (max-width: 450px) {
        display: none;
      }
    }
  }
`;
