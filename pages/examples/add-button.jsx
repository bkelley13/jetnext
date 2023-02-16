/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * @nolint
 * @oncall web_perf_infra
 */

import Link from 'next/link';
import React from 'react';
import Button from '@oracle/oraclejet';

export default function AddButton() {
  const addNewItem = () => {
    for (let i = 0; i < 128; i++) {
      const button = document.createElement('button');
      const tnode = document.createTextNode(i);
      button.appendChild(tnode);
      document.body.appendChild(button);
    }
    console.log(
      'Buttons added. Please check Memory tab in devtools',
    );
  };

  return (
    <div className="container">
      <div className="row">
        <Link href="/">Go back</Link>
      </div>
      <br />
      <div className="row">
        <button type="button" className="btn" onClick={addNewItem}>
          Adding buttons
        </button>
      </div>
    </div>
  );
}
