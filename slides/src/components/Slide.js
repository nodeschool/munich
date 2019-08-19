/** @jsx jsx */
import { Slide as SpectacleSlide } from 'spectacle';
import { jsx, css } from '@emotion/core';

const isProd = process.env.NODE_ENV === 'production';

export const Slide = props => {
  return (
    <SpectacleSlide {...props}>
      {props.branding && (
        <img
          css={css`
            position: absolute;
            top: 20px;
            right: 20px;
          `}
          src={`${
            isProd ? '/slides/' : ''
          }/assets/images/nodeschool-muc-logo.svg`}
          height="75.5"
          width="83.5"
          alt="NodeSchool-Munich-Logo"
        />
      )}
      {props.children}
      {props.footer && (
        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            position: absolute;
            bottom: 30px;
            left: 20px;
          `}
        >
          <hr
            css={css`
              border: none;
              border-bottom: 1px solid #e6be02;
              width: 50px;
              margin-right: 5px;
            `}
          />
          <span
            css={css`
              font-weight: bold;
              font-size: 18px;
              color: #e6be02;
              margin-right: 5px;
            `}
          >
            NodeSchool
          </span>
          <span
            css={css`
              font-weight: normal;
              font-size: 18px;
            `}
          >
            Munich
          </span>
        </div>
      )}
    </SpectacleSlide>
  );
};
