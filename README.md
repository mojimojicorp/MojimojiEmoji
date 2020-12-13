# 모지모지 이모지(MojiMoji Emoji)

![](https://img.shields.io/badge/language-javascript-red.svg) ![](https://img.shields.io/badge/version-1.0.1-orange) ![](https://img.shields.io/badge/license-MIT-green)

<center>
<img src="https://user-images.githubusercontent.com/30452963/69117857-76298b00-0ad4-11ea-9243-17ad4805c9eb.png" width="250" height="250"><br></br>

Extension application for whale browser.  
클릭 한 번으로 간편하게 이모티콘을 복사+붙여넣기 할 수 있는 확장앱입니다.

<a href="https://store.whale.naver.com/detail/ilglkcbgchmaadclmokfkcdmnanniakn">웨일 스토어에서 다운로드📥</a>

</center>

&nbsp;
&nbsp;

## 🆕Update

&nbsp;

### v.1.1.0 Update

- 프로젝트 구조 변경
- jquery, clipboard 라이브러리 제거
- copy, recent 동작 개선
  

### v.1.0.1 Update

- 누락된 이모티콘 추가 (표정, 동물-어류, 도구)
- 오타 수정

&nbsp;
&nbsp;

## 👾Getting Started

### Prerequisites

Whale Browser [설치](https://whale.naver.com/ko/download)가 필요합니다.

### Installing

```
npm install
```

&nbsp;
&nbsp;

## 🔌Running the tests

로컬에 프로젝트 저장 후, 웨일 브라우저 [개발자 모드](whale://extensions/)에서 프로젝트를 설치하면 테스트 가능합니다.

&nbsp;
&nbsp;

## 🔨Built With

- [Whale developers](https://developers.whale.naver.com/)
- [Font Awesome](https://fontawesome.com/)
- [Twemoji](https://twemoji.twitter.com)
- [Clipboard.js](https://github.com/zenorocha/clipboard.js)

&nbsp;
&nbsp;

## 📁File Structure

```
/app
    index.html 👉 project html 구조
/css
    index.css
/js
    /utils
        doc.js 👉 document methods
        const.js 👉 const bundle
    /pages
        /main
            emojiContainers.js 👉 emoji 불러올 html 구조 생성
            copy.js 👉 copy button click 후 기능
        /settings
            init.js 👉 setting page 초기 값 설정
    /components
        index.js 
        nav.js 👉 nav bar에 버튼 추가
        skintoneButtons.js 👉 피부색 버튼 추가
        /recent
            renderRecent.js 👉 recent 요소 render
            updateRecent.js 👉 update recent data
            removeDuplicate.js 👉 중복 요소 제거
    /events
        /buttonEvent(button click 관련 event listener 등록)
        /emojiEvent(emoji button click 관련 event listener 등록)
        /inputEvent(input 관련 event listener 등록)
```

js 관련 폴더는 크게 utils / pages / components / events 로 나뉩니다.        
events 폴더 내의 파일은 단순 eventlistener 등록 관련 파일입니다.

&nbsp;
&nbsp;

## 👥Contributing

언제든 참여해주세요! 건의나 제안사항은 issue에 남겨주시면 답변드리겠습니다.

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## 📢Versioning

We use [SemVer](http://semver.org/) for versioning.

## 😎Authors

See the list of [contributors](https://github.com/soyoungjeong/EmojiByEternal/graphs/contributors) who participated in this project.

## 📄License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/soyoungjeong/EmojiByEternal/blob/master/LICENSE) file for details
