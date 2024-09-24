import styled from '@emotion/styled';
import AcademyNoticeFilter from './academyNotice/AcademyNoticeFilter';
import AcademyNoticeList from './academyNotice/AcademyNoticeList';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/api';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AcademyNotice, AcademyNoticeResult } from '@/type/academy/notice';
import { AxiosError } from 'axios';
import Pagination from '@/page_component/common/Pagination';
import theme from '@/styles/theme';

export interface AcademyNoticeFormData {
  searchType: 'title' | 'content' | 'name';
  searchValue: string;
}

const AcademyNotice = () => {
  const method = useForm<AcademyNoticeFormData>({
    defaultValues: {
      searchType: 'title',
    },
  });
  const { watch } = method;
  const formData = watch();
  const [page, setPage] = useState(1);
  const { data, refetch } = useQuery<
    AcademyNotice,
    AxiosError,
    AcademyNoticeResult
  >({
    queryKey: ['notice', page],
    queryFn: () =>
      api({
        method: 'GET',
        url: 'landing/notices',
        params: {
          page: page,
          limit: 10,
          title:
            formData.searchType === 'title' && formData.searchValue
              ? formData.searchValue
              : undefined,
          content:
            formData.searchType === 'content' && formData.searchValue
              ? formData.searchValue
              : undefined,
          writer:
            formData.searchType === 'name' && formData.searchValue
              ? formData.searchValue
              : undefined,
        },
      }),
    select(data) {
      return data.result.resultData;
    },
  });

  const search = () => {
    page === 1 ? refetch() : setPage(1);
  };

  useEffect(() => {
    console.log('🚀 formData==>', formData);
  }, [formData]);

  return (
    <_inner>
      <h3>
        <span>COMMUNITY</span>
      </h3>
      <FormProvider {...method}>
        <AcademyNoticeFilter search={search} />
        <AcademyNoticeList data={data} page={page} />
        {/* 페이지네이션 */}
        <_paginationBox>
          <Pagination
            current={page}
            setPage={setPage}
            total={data?.totalCount ? data.totalCount : 1}
          />
        </_paginationBox>
      </FormProvider>
    </_inner>
  );
};

export default AcademyNotice;

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
    margin-bottom: 25px;
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
const _paginationBox = styled.div`
  ${theme.flex.row};
  margin-top: 32px;
`;
