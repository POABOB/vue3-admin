// 加載 CKeditor
import CKEditor from "@ckeditor/ckeditor5-vue"
// 使用inline樣式
import InlineEditorBase from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor"
import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials"
// 加載prebuild中沒有的功能

import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold"
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline"
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough"
import Code from "@ckeditor/ckeditor5-basic-styles/src/code"

// MARKDOWN 自動轉換，EX # + SPACE變成HEADING
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat"

// 縮排
import Indent from "@ckeditor/ckeditor5-indent/src/indent"
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock"

// 引述
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote"

// 程式碼
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock"

// 段落
import Heading from "@ckeditor/ckeditor5-heading/src/heading"

// 文字操作
import Font from "@ckeditor/ckeditor5-font/src/font"

// 水平線
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline"

import sideIcon from "@ckeditor/ckeditor5-core/theme/icons/object-right.svg"

// BASE64圖片
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter"
import Image from "@ckeditor/ckeditor5-image/src/image"
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar"
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption"
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle"
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize"
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage"
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert"

// 加載影片
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed"

// LIST
import List from "@ckeditor/ckeditor5-list/src/list"

// TABLE
import Table from "@ckeditor/ckeditor5-table/src/table"
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar"

// 文字對齊
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment"

export default {
  ckeditor: CKEditor.component,
  editor: InlineEditorBase,
  config: {
    plugins: [
      Heading,
      Font,
      Bold,
      Underline,
      Strikethrough,
      Code,
      Autoformat,
      Indent,
      IndentBlock,
      BlockQuote,
      CodeBlock,
      HorizontalLine,
      Image,
      ImageCaption,
      ImageStyle,
      ImageToolbar,
      Base64UploadAdapter,
      ImageResize,
      LinkImage,
      ImageInsert,
      MediaEmbed,
      List,
      Table,
      TableToolbar,
      Alignment,
      EssentialsPlugin
    ],
    toolbar: {
      items: [
        "heading",
        "|",
        "FontSize",
        "FontColor",
        "FontBackgroundColor",
        "bold",
        "underline",
        "Strikethrough",
        "link",
        "alignment",
        "|",
        "indent",
        "outdent",
        "|",
        "bulletedList",
        "numberedList",
        "|",
        "blockQuote",
        "code",
        "codeBlock",
        "|",
        "insertImage",
        "insertTable",
        "mediaEmbed",
        "|",
        "horizontalLine",
        "undo",
        "redo"
      ]
    },
    language: "zh",
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
    },
    mediaEmbed: { previewsInData: true },
    allowedContent: true,
    indentBlock: {
      offset: 2,
      unit: "em"
    },
    image: {
      toolbar: [
        "imageStyle:side",
        "imageStyle:alignLeft",
        "imageStyle:alignCenter",
        "imageStyle:alignRight",
        "|",
        "imageTextAlternative"
      ],
      styles: [
        "full",
        "side",
        "alignLeft",
        "alignCenter",
        "alignRight",
        {
          name: "sideLeft",
          title: "To the left side",
          icon: sideIcon,
          className: "side-image-left"
        }
      ]
    },
    fontSize: {
      options: [8, 9, 10, 11, 12, 14, "default", 16, 18, 24, 30, 36, 48]
    },
    codeBlock: {
      languages: [
        { language: "plaintext", label: "Plain text" }, // The default language.
        { language: "c", label: "C" },
        { language: "cs", label: "C#" },
        { language: "cpp", label: "C++" },
        { language: "css", label: "CSS" },
        { language: "go", label: "Go" },
        { language: "html", label: "HTML" },
        { language: "java", label: "Java" },
        { language: "javascript", label: "JavaScript" },
        { language: "php", label: "PHP" },
        { language: "python", label: "Python" },
        { language: "ruby", label: "Ruby" },
        { language: "typescript", label: "TypeScript" },
        { language: "xml", label: "XML" }
      ]
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph"
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1"
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2"
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3"
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4"
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5"
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6"
        }
      ]
    }
  }
}
