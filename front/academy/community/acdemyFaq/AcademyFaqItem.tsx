import theme from "@/styles/theme";
import { FaqResult } from "@/type/academy/faq";
import styled from "@emotion/styled";
import { MouseEvent, useRef } from "react";
type Props = {
  item: FaqResult | undefined;
};

const AcademyFaqItem = ({ item }: Props) => {
  const ref = useRef<HTMLOListElement>(null);

  const moveItem = (idx: number) => {
    const list = ref.current?.querySelectorAll(
      "li"
    ) as NodeListOf<HTMLLIElement>;
    const target = list[idx];

    if (target.classList.contains("on")) {
      target.classList.remove("on");
    } else {
      list.forEach((ele) => ele.classList.remove("on"));
      target.classList.add("on");
    }
  };

  return (
    <_ol ref={ref}>
      {item?.faq.map((ele, idx) => {
        return (
          <li key={idx} onClick={() => moveItem(idx)}>
            <div className="qna_q">
              <span>{item.faq.length - idx}</span>
              <span>{ele.title}</span>
              <span></span>
            </div>
            {ele?.content && (
              <_contents
                className="qna_a"
                dangerouslySetInnerHTML={{ __html: ele.content }}
              />
            )}
          </li>
        );
      })}
    </_ol>
  );
};

export default AcademyFaqItem;

const _ol = styled.ol`
  list-style: none;
  border-top: 2px solid #f6921d;
  position: relative;
  z-index: 1;

  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    position: relative;
    z-index: 2;
    background-color: white;

    &.on {
      .qna_q {
        color: white;
        background-color: #f6921d;
        z-index: 999;

        > span {
          &:nth-of-type(3) {
            &::before {
              background-color: white;
            }
            &::after {
              display: none;
            }
          }
        }
      }
      .qna_a {
        position: relative;
        opacity: 1;
        height: auto;
      }
    }
    > div {
      width: 100%;
      &.qna_q {
        cursor: pointer;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
        min-height: 60px;
        font-size: clamp(15px, 3vw, 20px);
        line-height: 1.6em;
        z-index: 2;
        padding: 10px 0;
        z-index: 999;

        > span {
          &:nth-of-type(1) {
            width: 8%;
            text-align: center;
          }
          &:nth-of-type(2) {
            width: 84%;
            padding-left: 20px;
          }
          &:nth-of-type(3) {
            width: 8%;
            height: 60px;
            text-align: center;
            position: relative;
            &::before {
              content: "";
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: clamp(15px, 4vw, 22px);
              height: 2px;
              background-color: #f6921d;
            }
            &::after {
              content: "";
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 2px;
              height: clamp(15px, 4vw, 22px);
              background-color: #f6921d;
            }
          }
        }
      }
      &.qna_a {
        position: absolute;
        opacity: 0;
        height: 0;
        overflow: hidden;
        padding: 20px;
        border-bottom: 1px solid #e8e8e8;
        background: #fafafa;
        padding: 15px calc(8% + 20px);
        min-height: 60px;
        display: flex;
        align-items: center;
        word-break: break-all;
        font-size: 16px;
        line-height: 1.6em;
        z-index: 1;
      }
    }
  }
`;
const _contents = styled.div`
  width: 100%;
  ${theme.flex.col};
  p {
    word-wrap: break-word;
    white-space: break-spaces;
    width: 100%;
  }
`;
