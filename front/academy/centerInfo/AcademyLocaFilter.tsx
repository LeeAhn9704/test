import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { AcademyCenterFormData } from '../program/AcademyExperienceLocation';
import RegionSelectUI from '@/page_component/hq/commonUI/RegionSelectUI';

type Props = {
  search: (region1data?: string, region2data?: string) => void;
};

const AcademyLocaFilter = ({ search }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState<boolean>(false);

  const region1 = useRef<string>('');
  const region2 = useRef<string>('');

  const { register } = useFormContext<AcademyCenterFormData>();

  useEffect(() => {
    setTimeout(() => setReady(true), 200);
  }, []);

  return (
    <_filterBox ref={ref}>
      {ready && (
        <>
          <div>
            <RegionSelectUI
              selectRegion1={(val) => {
                region1.current = `${val}`;
              }}
              selectRegion2={(val) => {
                region2.current = `${val}`;
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="센터명을 입력하세요"
              {...register('centerName')}
              onKeyDown={(e) => e.key === 'Enter' && search()}
            />
            <button onClick={() => search(region1.current, region2.current)}>
              검색
            </button>
          </div>
        </>
      )}
    </_filterBox>
  );
};

export default AcademyLocaFilter;

const _filterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fffbf5;
  padding: 30px;
  min-height: 102px;
  position: relative;
  flex-wrap: wrap;
  margin-top: 60px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 550px) {
    padding: 20px 10px;
    min-height: 80px;
    .ant-select {
      width: 100px !important;
      height: 35px !important;
    }
  }
  @media (max-width: 400px) {
    /* height: 100px;
    padding-top: 0;
    padding-bottom: 36px; */
    .ant-select {
      font-size: 12px !important;
    }
  }
  > div {
    display: flex;
    align-items: center;
    &:nth-of-type(1) {
      flex: 1;
      @media (max-width: 800px) {
        flex: auto;
        width: 100%;
        padding: 0 16px;
        margin-bottom: 15px;
      }
    }
    &:nth-of-type(2) {
      flex: 2;
      @media (max-width: 800px) {
        flex: auto;
        width: 100%;
      }
      > input {
        width: 420px;
        height: 42px;
        font-size: 14px;
        color: #222;
        border: 1px solid #d9d9d9;
        border-radius: 30px;
        padding: 0 30px;
        box-sizing: border-box;
        margin: 0 1em 0 0.5em;
        @media (max-width: 1200px) {
          width: auto;
          flex: 3;
        }
        @media (max-width: 550px) {
          margin: 0 0.5em;
          padding: 0 10px;
          height: 35px;
        }
        @media (max-width: 400px) {
          width: 170px;
        }
      }
      > button {
        cursor: pointer;
        color: white;
        font-size: 14px;
        line-height: 100%;
        background: #f6921d;
        width: 162px;
        text-align: center;
        padding: 14px 0;
        border-radius: 30px;
        @media (max-width: 1200px) {
          width: auto;
          flex: 1;
        }
        @media (max-width: 550px) {
          width: 60px;
          padding: 10px;
        }
        /* @media (max-width: 400px) {
          position: absolute;
          bottom: 13px;
          right: 15px;
          padding: 8px 10px;
        } */
      }
    }
  }
`;
