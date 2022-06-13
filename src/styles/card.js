import { css } from '@emotion/react';

export const styleCard = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px',
  width: '160px',
  height: '160px',
  borderRadius: '30px',
  backgroundColor: '#ebc969',
  boxShadow: '0 3px 6px 0 rgb(0 0 0 / 16%)',
});

export const styleCardTitle = css({
  fontSize: '20px',
  fontWeight: 'bold',
  textShadow: '0 3px 6px rgb(0 0 0 / 16%)',
  color: '#fff',
});

export const styleCardContent = css({
  fontSize: '16px',
  textAlign: 'center',
  wordBreak: 'keep-all',
  lineHeight: '1.3',
});
