import { AcademyNoticeResult } from '@/type/academy/notice';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

type Props = {
  data: AcademyNoticeResult | undefined;
  page: number;
};

const AcademyNoticeList = ({ data, page }: Props) => {
  const router = useRouter();
  return (
    <>
      <_ol>
        <_head>
          <span>NO</span>
          <span>제목</span>
          <span>작성자</span>
          <span>등록일</span>
          <span>조회수</span>
        </_head>
        {data?.notices.map((ele, idx) => {
          return (
            <_li
              key={idx}
              onClick={() =>
                router.push(
                  `/academy/community/notice/detail?idx=${ele.noticeIdx}`,
                  // {
                  //   pathname: `/academy/community/notice/detail`,
                  //   query: {
                  //     idx: ele.noticeIdx,
                  //     prevIdx: data.notices[idx - 1]?.noticeIdx || '',
                  //     prevTitle: data.notices[idx - 1]?.title || '',
                  //     nextIdx: data.notices[idx + 1]?.noticeIdx || '',
                  //     nextTitle: data.notices[idx + 1]?.title || '',
                  //   },
                  // },
                  // `/academy/community/notice/detail?idx=${ele.noticeIdx}`,
                )
              }
            >
              <span>{ele.topFix ? '공지' : (page - 1) * 10 + (idx + 1)}</span>
              <span>{ele.title}</span>
              <span>{ele.writer}</span>
              <span>{ele.createdAt}</span>
              <span>{ele.views}</span>
            </_li>
          );
        })}
      </_ol>
    </>
  );
};

export default AcademyNoticeList;

const _ol = styled.ol`
  width: 100%;
  min-height: 300px;
  list-style: none;
  margin-top: 30px;
`;
const _head = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 600;
  @media (max-width: 650px) {
    font-size: 13px;
  }
  background: #fac400;
  padding: 15px 0;
  @media (max-width: 650px) {
    padding: 15px 5px;
  }
  border-radius: 10px;

  span {
    text-align: center;
    &:nth-of-type(1) {
      flex: 1;
    }
    &:nth-of-type(2) {
      flex: 7;
      padding-left: 20px;
      @media (max-width: 650px) {
        flex: 3.5;
        padding-left: 5px;
        padding-right: 5px;
      }
    }
    &:nth-of-type(3) {
      flex: 1.5;
    }
    &:nth-of-type(4) {
      flex: 2;
    }
    &:nth-of-type(5) {
      flex: 1.5;
      padding-right: 5px;
    }
  }
`;

const _li = styled.li`
  display: flex;
  align-items: center;
  min-height: 60px;
  font-size: 15px;
  @media (max-width: 650px) {
    font-size: 12px;
  }
  color: #222;
  border-bottom: 1px solid #d9d9d9;
  span {
    text-align: center;
    padding: 10px 0 10px 0px;
    word-wrap: break-word;
    &:nth-of-type(1) {
      flex: 1;
    }
    &:nth-of-type(2) {
      flex: 7;
      text-align: left;
      padding-left: 20px;
      cursor: pointer;
      @media (max-width: 650px) {
        flex: 3.5;
        padding-left: 5px;
        padding-right: 5px;
      }
    }
    &:nth-of-type(3) {
      flex: 1.5;
    }
    &:nth-of-type(4) {
      flex: 2;
    }
    &:nth-of-type(5) {
      flex: 1.5;
      padding-right: 5px;
    }
  }
`;
