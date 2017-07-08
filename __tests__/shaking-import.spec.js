/**
 * @description - sub-module import test suits
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

'use strict';

const path = require('path');
const babel = require('babel-core');
const ShakingImport = require('../src');

// fixture
const babelOptions = {
  presets: [],
  plugins: [],
  babelrc: false
};

describe('babel-plugin-shaking-import', function () {
  it('should ignore default import declaration', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/import-default.js');
    const ShakingImportPlugin = [ShakingImport, {
      libraryName: 'lodash',
      libraryDirectory: '.'
    }];
    const caseBabelOptions = Object.assign({}, babelOptions, { plugins: [ShakingImportPlugin] });
    const { code } = babel.transformFileSync(fixture, caseBabelOptions);

    expect(code).toMatchSnapshot();
  });

  it('should support array state options', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/mixture.js');
    const ShakingImportPlugin = [ShakingImport, [
      {
        libraryName: 'lodash',
        libraryDirectory: '.'
      },
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        libraryStrategy: 'camel2dash',
        libraryStyle: 'css'
      }
    ]];
    const caseBabelOptions = Object.assign({}, babelOptions, {
      presets: ['react'],
      plugins: [ShakingImportPlugin]
    });
    const { code } = babel.transformFileSync(fixture, caseBabelOptions);

    expect(code).toMatchSnapshot();
  });

  it('should support adaptor libraryStrategy', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/lodash.js');
    const ShakingImportPlugin = [ShakingImport, {
      libraryName: 'lodash',
      libraryDirectory: '.',
      libraryStrategy: 'whatever'
    }];
    const caseBabelOptions = Object.assign({}, babelOptions, { plugins: [ShakingImportPlugin] });
    const { code } = babel.transformFileSync(fixture, caseBabelOptions);

    expect(code).toMatchSnapshot();
  });

  it('should support lodash camel2camel style cases', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/lodash.js');
    const ShakingImportPlugin = [ShakingImport, {
      libraryName: 'lodash',
      libraryDirectory: '.'
    }];
    const caseBabelOptions = Object.assign({}, babelOptions, { plugins: [ShakingImportPlugin] });
    const { code } = babel.transformFileSync(fixture, caseBabelOptions);

    expect(code).toMatchSnapshot();
  });


  it('should support libraryOverride cases', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/lodash.js');
    const ShakingImportPlugin = [ShakingImport, {
      libraryName: 'lodash',
      libraryDirectory: '.'
    }];
    const caseBabelOptions = Object.assign({}, babelOptions, { plugins: [ShakingImportPlugin] });
    const { code } = babel.transformFileSync(fixture, caseBabelOptions);

    expect(code).toMatchSnapshot();
  });

  it('should support libraryOverride cases', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/lodash.js');
    const ShakingImportPlugin = [ShakingImport, {
      libraryName: 'lodash',
      libraryOverride: 'lodash-es',
      libraryDirectory: '.',
    }];
    const caseBabelOptions = Object.assign({}, babelOptions, { plugins: [ShakingImportPlugin] });
    const { code } = babel.transformFileSync(fixture, caseBabelOptions);

    expect(code).toMatchSnapshot();
  });

  it('should support antd camel2dash style cases', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/antd.js');
    const caseBabelOptions = Object.assign({}, babelOptions, {
      presets: ['react'],
      plugins: [[ShakingImport, {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        libraryStrategy: 'camel2dash'
      }]]
    });
    const { code } = babel.transformFileSync(fixture, caseBabelOptions);

    expect(code).toMatchSnapshot();
  });

  it('should support antd camel2dash style cases', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/antd.js');
    const caseBabelOptions = Object.assign({}, babelOptions, {
      presets: ['react'],
      plugins: [[ShakingImport, {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        libraryStrategy: 'camel2dash',
        libraryStyle: true
      }]]
    });
    const { code } = babel.transformFileSync(fixture, caseBabelOptions);

    expect(code).toMatchSnapshot();
  });

  it('should support antd camel2dash style cases', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/antd.js');
    const caseBabelOptions = Object.assign({}, babelOptions, {
      presets: ['react'],
      plugins: [[ShakingImport, {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        libraryStrategy: 'camel2dash',
        libraryStyle: 'css'
      }]]
    });
    const { code } = babel.transformFileSync(fixture, caseBabelOptions);

    expect(code).toMatchSnapshot();
  });

  it('should support antd camel2underline style cases', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/react-toolbox.js');
    const caseBabelOptions = Object.assign({}, babelOptions, {
      presets: ['react'],
      plugins: [[ShakingImport, {
        libraryName: 'react-toolbox',
        libraryDirectory: 'lib',
        libraryStrategy: 'camel2underline'
      }]]
    });
    const { code } = babel.transformFileSync(fixture, caseBabelOptions);

    expect(code).toMatchSnapshot();
  });
});