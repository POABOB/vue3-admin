const storyData = [
  {
    date: "2022-07-31",
    name: "跨院扣課系統",
    thumb: require("@/assets/img/c.jpg"),
    title: "<h1 style='text-align: center;'><strong>跨院扣課系統</strong></h1>",
    content:
      "<h2><strong>專案時間</strong></h2><p>本專案是由<span style='background-color:rgb(250,204,204);'>2022年5月</span>開始建置，並於<span style='background-color:rgb(250,204,204);'>2022年7月</span>完成並正式上線。</p><p><br></p><h2><strong>專案技術</strong></h2><p>前端：Vue</p><p>後端：PHPSLIM4+SWOOLE</p><p>DEVOPS：Docker、GitHubActions、Codeception(單元、整合測試)</p><p>線上環境：GCP、Git</p><p><br></p><h2><strong>專案功能</strong></h2><p>本專案<span style='background-color:rgb(250,204,204);'>本人只負責扣課申請的後端API</span>設計，前端是由公司的前端工程師所建構的，同步API則是其他同仁。</p><h3>1.診所管理：</h3><ul><li>編輯診所，建立診所間的<span style='background-color:rgb(250,204,204);'>從屬關係</span>，<span style='background-color:rgb(250,204,204);'>用來當作扣課判斷的依據</span>。</li></ul><h3>2.使用者管理：</h3><ul><li>編輯使用者，讓他們<span style='background-color:rgb(250,204,204);'>有不同權限操控扣課系統</span>。</li></ul><h3>3.扣課管理：</h3><ul><li>A診所<span style='background-color:rgb(250,204,204);'>提出扣課申請</span>。</li><li>B診所<span style='background-color:rgb(250,204,204);'>管理該申請</span>，並<span style='background-color:rgb(250,204,204);'>選擇扣課課程</span>。</li><li><span style='background-color:rgb(250,204,204);'>紀錄扣課操作</span>，給同步API執行同步處理。</li></ul>",
    image:
      "https://images.cakeresume.com/post-images/85fdb66d-4c1a-4702-bdf9-961175efe050.png",
    images: [
      "https://images.cakeresume.com/post-images/e75f48a9-4c3f-4893-af1a-2d0e33f01a6f.jpeg",
      "https://images.cakeresume.com/post-images/3eb92696-408e-4fe9-80f0-0e31c0a8be07.png",
      "https://images.cakeresume.com/post-images/3ee79f51-d535-47d1-b1cd-793d215b133e.jpeg",
      "https://images.cakeresume.com/post-images/b743da9b-cb6b-420d-b203-c70959c12478.png",
      "https://images.cakeresume.com/post-images/6eca7413-807c-424e-8630-a605c7425a2b.jpeg",
      "https://images.cakeresume.com/post-images/458333f4-8d6c-4c06-966a-f88457dea0eb.png",
      "https://images.cakeresume.com/post-images/722528ed-f2f2-4995-9683-9c46b7d67ab0.jpeg",
      "https://images.cakeresume.com/post-images/f3f3e78e-2057-4335-b74a-11ea960cac4c.jpeg",
      "https://images.cakeresume.com/post-images/3e7a0920-6c4b-4ab1-98b3-821e27370bc6.jpeg"
    ],
    content2: ""
  },
  {
    date: "2020-08-15",
    name: "打卡系統",
    thumb: require("@/assets/img/b.jpg"),
    title: "<h1 style='text-align: center;'><strong>打卡系統</strong></h1>",
    content:
      "<h2><strong>專案時間</strong></h2><p>本專案是由<span style='background-color: rgb(250, 204, 204);'>2020年5月</span>開始建置，並於<span style='background-color: rgb(250, 204, 204);'>2020年8月</span>完成並正式上線。</p><p><br/></p><h2><strong>專案技術</strong></h2><p>前端：Vue、ApacheCordova、Electron</p><p>後端：PHPMVC框架(薪資系統的API)</p><p>環境：</p><h3>1.電腦Web應用：</h3><ul><li style='margin-bottom: 10px;'>診所電腦會配置攝像頭，並且裝好httpserver，透過輸入內網的方式使用打卡系統。</li></ul><h3>2.AndroidAPK應用：</h3><ul><li style='margin-bottom: 10px;'>將專案透過ApacheCordova打包成APK檔案，安裝到診所平板之中進行使用。</li></ul><h3>3.Electron應用：</h3><ul><li style='margin-bottom: 10px;'>將HTML打包成exe檔案(不常用)。</li></ul><p><br/></p><h2><strong>專案功能</strong></h2><p>本專案皆由<span style='background-color: rgb(250, 204, 204);'>本人</span>獨立開發完成，由於是打卡應用，所以必須要有員工、排班、打卡紀錄、公告等資訊。</p><h3>1.公告：</h3><ul><li style='margin-bottom: 10px;'>撈取薪資系統的公告，顯示於打卡介面。</li></ul><h3>2.員工打卡：</h3><ul><li style='margin-bottom: 10px;'>獲取員工當天有無排班，如果有的話就會有<span style='background-color: rgb(250, 204, 204);'>防呆機制</span>，<span style='background-color: rgb(250, 204, 204);'>避免員工打錯班別</span>。</li><li style='margin-bottom: 10px;'>可以判斷說這名員工在<span style='background-color: rgb(250, 204, 204);'>打卡前是否是早到/早退/遲到/加班的狀態</span>。</li><li style='margin-bottom: 10px;'><span style='background-color: rgb(250, 204, 204);'>相機使用與否</span>，開啟相機可以查看打卡人是否為本人。</li></ul>",
    image:
      "https://images.cakeresume.com/post-images/8a4da6bc-4021-4cff-8ff5-55f76523c160.png",
    images: [],
    content2:
      "<p><br /></p><div style='width: 100%;/* display: -webkit-box;display: -ms-flexbox; */display: flex;/* -webkit-box-pack: center;-ms-flex-pack: center; */justify-content: center;/* -webkit-box-align: center;-ms-flex-align: center;align-items: center; */'><iframe class='p4-_1gxhi00' frameborder='0' allowfullscreen='1' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' title='打卡系統 DEMO' width='640' height='360' src='https://www.youtube.com/embed/nHbtc4_PUHE?enablejsapi=1&amp;origin=https%3A%2F%2Fwww.cakeresume.com&amp;widgetid=7' id='widget8'></iframe></div>"
  },
  {
    date: "2020-05-29",
    name: "薪資考勤系統",
    thumb: require("@/assets/img/a.jpg"),
    title: "<h1 style='text-align: center;'><strong>薪資考勤系統</strong></h1>",
    content:
      "<h2><strong>專案時間</strong></h2><p>本專案是由<span style='background-color: rgb(250, 204, 204);'>2019年9月</span>開始建置，並於<span style='background-color: rgb(250, 204, 204);'>2020年5月</span>完成並正式上線。</p><p><br/></p><h2><strong>專案技術</strong></h2><p>前端：Vue</p><p>後端：PHPMVC框架</p><p>線上環境：GCP、Git、Cronjob(備份用)、LAMP</p><p><br/></p><h2><strong>專案功能</strong></h2><p>本專案皆由<span style='background-color: rgb(250, 204, 204);'>本人</span>獨立開發完成，由於那時剛開始學習寫這種大專案，所以在介面方面的設計相對陽春。</p><h3>1.診所管理：</h3><ul><li style='margin-bottom: 10px;'>診所後台管理員的操作，診所老闆可以編輯其他管理員來<span style='background-color: rgb(250, 204, 204);'>使用薪資系統</span>。</li><li style='margin-bottom: 10px;'>不同管理員的權限，所對應的功能會有所不用。</li></ul><h3>2.公告管理：</h3><ul><li style='margin-bottom: 10px;'>診所可以新增公告，該公告會在<span style='background-color: rgb(250, 204, 204);'>打卡系統</span>和<span style='background-color: rgb(250, 204, 204);'>員工登入系統</span>中看到。</li></ul><h3>3.員工管理：</h3><ul><li style='margin-bottom: 10px;'>管理員工的頁面，並且可以<span style='background-color: rgb(250, 204, 204);'>調整該員工的基本資料</span>。</li><li style='margin-bottom: 10px;'>可以<span style='background-color: rgb(250, 204, 204);'>編輯員工眷屬</span>，在爾後的<span style='background-color: rgb(250, 204, 204);'>健保計算之中可以納用</span>。</li><li style='margin-bottom: 10px;'>設定<span style='background-color: rgb(250, 204, 204);'>員工排班表顯示的顏色</span>。</li><li style='margin-bottom: 10px;'>設定員工餐費金額。</li><li style='margin-bottom: 10px;'>設定員工在<span style='background-color: rgb(250, 204, 204);'>加班/遲到/早到/早退的狀態</span>下的計算方式。</li></ul><h3>4.基本薪資：</h3><ul><li style='margin-bottom: 10px;'>設定<span style='background-color: rgb(250, 204, 204);'>員工底薪</span>和其他薪資項目的金額。</li><li style='margin-bottom: 10px;'>設定<span style='background-color: rgb(250, 204, 204);'>投保級距</span>，系統會<span style='background-color: rgb(250, 204, 204);'>自動計算勞保費和健保費</span>。</li></ul><h3>5.班別管理：</h3><ul><li style='margin-bottom: 10px;'>班別分為<span style='background-color: rgb(250, 204, 204);'>三個班別時段</span>，可以依據需求<span style='background-color: rgb(250, 204, 204);'>儲存常用的時段</span>。</li><li style='margin-bottom: 10px;'>編輯餐費補助次數和班別數。</li></ul><h3>6.排班表：</h3><ul><li style='margin-bottom: 10px;'>編輯<span style='background-color: rgb(250, 204, 204);'>員工排班</span>，並且<span style='background-color: rgb(250, 204, 204);'>顯示在頁面之中</span>。</li><li style='margin-bottom: 10px;'>可以藉由查看員工<span style='background-color: rgb(250, 204, 204);'>該月所需工作的時段、崗位和其時數估計</span>。</li><li style='margin-bottom: 10px;'>可以<span style='background-color: rgb(250, 204, 204);'>將已經編輯好的排班複製到別週</span>，節省排班時間。</li><li style='margin-bottom: 10px;'>可以<span style='background-color: rgb(250, 204, 204);'>將排班列印成PDF檔案</span>。</li></ul><h3>7.打卡紀錄：</h3><ul><li style='margin-bottom: 10px;'>展現時間範圍內員工的打卡紀錄。</li><li style='margin-bottom: 10px;'>可以查看該打卡紀錄的<span style='background-color: rgb(250, 204, 204);'>詳細資訊(類型、照片)</span>。</li><li style='margin-bottom: 10px;'>可以<span style='background-color: rgb(250, 204, 204);'>編輯員工的打卡紀錄</span>。</li><li style='margin-bottom: 10px;'>可以<span style='background-color: rgb(250, 204, 204);'>將打卡紀錄輸出成CSV、PDF檔案</span>。</li></ul><h3>8.出勤紀錄：</h3><ul><li style='margin-bottom: 10px;'>該功能是計算排班與打卡紀錄的差異，可以<span style='background-color: rgb(250, 204, 204);'>得知是否有遲到早退相關的資訊</span>。</li><li style='margin-bottom: 10px;'>可以<span style='background-color: rgb(250, 204, 204);'>將出勤紀錄輸出成CSV、PDF檔案</span>。</li></ul><h3>9.出勤統計：</h3><ul><li style='margin-bottom: 10px;'>將出勤記錄統計成一個新的資料表，主要有以下資訊：</li><li style='margin-bottom: 10px;'>在職天數、特休、總工時、實際打卡時數、診數、加診診數、請假分鐘(扣全薪)、請假分鐘(扣半薪)、請假分鐘(不扣薪)、加班分鐘、遲到分鐘、早退分鐘、忘刷卡次數、餐點補助次數。</li><li style='margin-bottom: 10px;'>可以<span style='background-color: rgb(250, 204, 204);'>手動再去編輯出勤統計</span>。</li><li style='margin-bottom: 10px;'>可以<span style='background-color: rgb(250, 204, 204);'>將出勤統計輸出成PDF檔案</span>。</li></ul><h3>10.薪資結算：</h3><ul><li style='margin-bottom: 10px;'>藉由員工資訊、基本薪資、出勤統計來整合的一個功能，可以<span style='background-color: rgb(250, 204, 204);'>計算該月員工的薪資</span>。</li><li style='margin-bottom: 10px;'><span style='background-color: rgb(250, 204, 204);'>將薪資條輸出成CSV、PDF檔案</span>。</li><li style='margin-bottom: 10px;'><span style='background-color: rgb(250, 204, 204);'>將基本薪資鎖定，避免重新整理蓋掉原本設定</span>。</li></ul><p><br/></p>",
    image:
      "https://images.cakeresume.com/post-images/541fc316-4552-45b5-b94b-7f7e7eee988e.png",
    images: [
      "https://images.cakeresume.com/post-images/20e35841-acda-47e1-80da-4af52d9a79ef.png",
      "https://images.cakeresume.com/post-images/6ac5095a-9144-4631-aa76-0f88cddbda84.png",
      "https://images.cakeresume.com/post-images/47e5d838-ec6d-459c-a846-f160b50fa213.png",
      "https://images.cakeresume.com/post-images/52ee6d09-3207-432d-8818-ee566db77c2a.png",
      "https://images.cakeresume.com/post-images/dfb0f49d-2c03-4129-80cf-595219407155.png",
      "https://images.cakeresume.com/post-images/5283707c-cb5e-48e1-9aee-c3f59866066e.png",
      "https://images.cakeresume.com/post-images/32b44ae9-62fa-4597-817b-c740c388f0db.png",
      "https://images.cakeresume.com/post-images/721ac733-6e1e-412b-bb6c-d421992ea40f.png",
      "https://images.cakeresume.com/post-images/1bcf2867-ac8a-4993-8a88-6da7c8f04bb5.png",
      "https://images.cakeresume.com/post-images/bafa0421-2baa-41c1-9f60-dc7be0c99690.png",
      "https://images.cakeresume.com/post-images/24ae42b9-3c22-4569-8f8b-939d423f38ad.png",
      "https://images.cakeresume.com/post-images/17034b5c-7d49-42a9-9406-a07d42056df1.png",
      "https://images.cakeresume.com/post-images/04443166-6a35-4fbf-b4f4-dca570a8a7ad.png",
      "https://images.cakeresume.com/post-images/a0487b69-64e9-4681-b31f-d08eaf4acf5e.png",
      "https://images.cakeresume.com/post-images/08f1f978-b733-451b-b0b0-584fca47ecb2.png",
      "https://images.cakeresume.com/post-images/44f37c69-ff34-44f9-a640-fa9584a8fa7f.png",
      "https://images.cakeresume.com/post-images/7c7326ae-a360-4cba-93e2-8e2c74a4db51.png"
    ],
    content2: ""
  }
]

export { storyData }
