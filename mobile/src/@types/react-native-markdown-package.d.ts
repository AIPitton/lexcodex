declare module 'react-native-markdown-package' {
  import { Component } from 'react'
  import { StyleProp, ViewStyle, TextStyle } from 'react-native'

  interface MarkdownProps {
    styles?: { [key: string]: StyleProp<ViewStyle | TextStyle> }
    children: string
  }

  export default class Markdown extends Component<MarkdownProps> {}
}
