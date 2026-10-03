夏侯沁蕊的经济学学术主页
======================

这是可直接上传 GitHub Pages 的静态网站，无需安装软件或运行编译。
先双击 index.html，即可在本机查看。浏览器本地打开即可显示文字、头像和研究页面。

一、上传到 GitHub Pages

1. 登录 GitHub，创建一个 Public（公开）仓库。
   仓库名称必须为：你的GitHub用户名.github.io
   请将“你的GitHub用户名”替换为实际账号名，不要直接照抄占位文字。
   如果用户名含大写字母，仓库名中用小写。
   创建时勾选 Add README，方便出现文件上传入口。

2. 在仓库页面选择 Add file > Upload files。
   上传本文件所在文件夹里面的所有内容，包括 index.html、research.html、
   assets 文件夹和 .nojekyll。点击 Commit changes。
   不要上传 ZIP 本身，也不要把外层 qinrui-xiahou-website 文件夹整个套在根目录下。
   正确的仓库首页应直接显示 index.html 和 assets 文件夹。
   如果 Windows 隐藏 .nojekyll，可在资源管理器中启用“显示隐藏的项目”。

3. 打开仓库 Settings > Pages。
   Build and deployment 下选择：
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)
   点击 Save。

4. 等待 GitHub 完成发布。通常几分钟，官方说明可能需要最多约 10 分钟。
   在 Settings > Pages 中点击 Visit site，即可打开正式主页。
   正式地址为 https://你的GitHub用户名.github.io/

5. 发布后检查 Home、Research、CV，以及邮箱、LinkedIn 和论文链接。
   CV 应打开 assets/Qinrui-Xiahou-CV.pdf。
   SSRN、CNKI 和期刊网站可能因地区、登录或访问限制而无法直接打开。

如果使用任意名称的项目仓库，本网站的相对链接同样支持
https://你的GitHub用户名.github.io/仓库名/ 这样的地址。
无需填写 GitHub 用户名到网页代码，也无需个人访问令牌。

GitHub 官方说明（2026年10月核对）：
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

二、文件与后续更新

index.html                      首页、简介、教育、背景和审稿服务
research.html                   工作论文、在研项目、已发表论文
assets/style.css                样式、配色、电脑与手机排版
assets/qinrui-xiahou.jpg         本人头像
assets/Qinrui-Xiahou-CV.pdf      可下载的学术 CV
.nojekyll                       让 GitHub 直接提供静态文件
README.txt                      本说明（不会显示在主页正文中）

改简介：在 GitHub 打开 index.html，点击编辑，修改 BIO 注释后的文字。
改职位：index.html 和 research.html 的侧栏都要更新，PDF CV 也需同步更新。
改论文：打开 research.html，找到相应标题，修改标题、作者、年份或状态。
添加论文：复制同类的 <article class="paper"> ... </article> 整段后填写真实信息。
换 CV：用新的 PDF 替换 assets/Qinrui-Xiahou-CV.pdf，保持同名即可。
换照片：替换 assets/qinrui-xiahou.jpg；如照片比例不同，适当调整 style.css 中 .portrait。
更新日期：修改两份 HTML 底部的 Updated October 2026。
更改保存到 main 分支后，GitHub Pages 会重新发布。

三、内容依据与处理

简介依据本人在对话中补充的最新版 bio，缩写为两段。
职位保留 incoming，未写为已经入职。
博士学位根据本人确认，改为 2026 年 9 月 24 日完成。
研究领域、博士论文章节和 RFF 工作内容采用本人随后补充的信息。
论文标题、作者顺序、年份、投稿状态、资助金额和学术成就以提供的简历为准。
博士论文章节单独收录于 PDF CV；工作论文不因章节名称不同而擅自改名。
Journal of Finance 为 submitted；Journal of Urban Economics 为 revise and resubmit；
Journal of Development Economics 为 invited to submit，均未写成 accepted 或 forthcoming。
审稿列表沿用简历五本期刊，未自行加入 LinkedIn 中新增的 Economic Journal。
公开网站与 PDF CV 只保留学术邮箱、LinkedIn，未加入手机、房间地址或证书编号。
PDF 是根据提供资料重新排版的学术 CV，并非原始 Word 文件的逐页转换。
简历中标为 Scheduled 的会议在 PDF 中仍保留该标记，未自行推断已报告。
没有编写来源未提供的摘要，也没有给尚未提供稿件的论文设置虚假下载链接。
引用作者姓名有统一缩写排版，不改变作者顺序。

版式参考：https://shuoliecon.github.io/
头像来源：香港大学商学院本人公开资料页
https://www.hkubs.hku.hk/sc/people/qinrui-xiahou/
头像原始文件：
https://www.hkubs.hku.hk/wp-content/uploads/fly-images/179537/Qinrui-Xiahou_cropped-940x1000-ct.jpg
官方资料页仍写博士生，其旧身份未用于主页。

本次只准备网站代码和资产，尚未上传或发布至 GitHub。
