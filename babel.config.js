module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3'
      }
    ]
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: 'css'
      },
      'ant-design-vue'
    ],
    [
      'import',
      {
        libraryName: '@ant-design/icons-vue',
        libraryDirectory: 'lib/icons',
        camel2DashComponentName: false
      },
      '@ant-design/icons-vue'
    ]
  ]
}
