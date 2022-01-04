/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import PropTypes from 'prop-types';
import React from 'react';
import { ColorPalette, ColorItem } from '@storybook/addon-docs';
import { CopyCode } from './CopyCode';
import { cssVariable, formatDeltaE, getColors, getColorName, getColorGroupName, styleDictionaryRef } from './util';
import { parseColor } from './color-util';

export const ColorRow = ({ name, token }) => (
  <ColorItem
    title={name}
    subtitle={
      <>
        <CopyCode code={cssVariable(token)}></CopyCode>
        <br />
        <CopyCode code={styleDictionaryRef(token)}></CopyCode>
        {typeof token.deltaE === 'number' ? <p>{formatDeltaE(token.deltaE)}</p> : ''}
      </>
    }
    colors={[token.value]}
  />
);

ColorRow.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.object.isRequired,
};

export const ColorGroupRow = ({ name, tokens }) => (
  <ColorItem key={name} title={name} colors={tokens.map(({ value }) => value)} />
);

ColorGroupRow.propTypes = {
  name: PropTypes.string.isRequired,
  tokens: PropTypes.array.isRequired,
};

export const ColorTable = ({ tokens }) => {
  const { grouped, nonGrouped } = getColors(tokens);

  return (
    <ColorPalette>
      {grouped.map((tokens) => {
        const name = getColorGroupName(tokens[0]);
        return <ColorGroupRow key={name} name={name} tokens={tokens} />;
      })}
      {nonGrouped.map((token) => {
        const name = getColorName(token);
        return <ColorRow key={token.path.join('-')} name={name} token={token} />;
      })}
    </ColorPalette>
  );
};

ColorTable.propTypes = {
  tokens: PropTypes.object.isRequired,
};

export const ColorCard = ({ color }) => {
  const parsed = parseColor(color);

  return parsed ? (
    <div>
      <div
        style={{
          display: 'inline-block',
          width: '50px',
          height: '50px',
          backgroundColor: color,
        }}
      ></div>
    </div>
  ) : (
    <></>
  );
};

ColorCard.propTypes = {
  color: PropTypes.string.isRequired,
};