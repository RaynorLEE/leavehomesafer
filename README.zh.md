# 一個「安心出行」的相容程式實現

本文為英文版本之翻譯，僅供參考。

本程式系一個「安心出行」的相容程式，可用於掃描安心出行（LeaveHomeSafe）的 QR codes。依據香港政府規定，餐飲業者被強迫以要求客人掃描安心出行 QR codes，但當局未有規定以何種程式掃描。（見[egn20212543106]）。_儘管如此，上述並非本人開發本程式之原因或因素。此工具僅用於練習本人 JavaScript 技巧及展示技術能力。閣下決不可使用本程式進行任何非法用途。如其他人有疑問，程式之使用者有義務解釋情況及遵守當地法律。程式作者對使用本程式的任何行為不負責任。_

本程式有能力讀取 安心出行 QR code 的內容。使用此相容實現，閣下可以按掣人手記錄閣下記錄。如果未有按掣，則不會有記錄（因技術原因）。資料僅會在閣下電話中瀏覽器保留。

使用以下鏈接以使用本 progressive web app (PWA)：
<https://yangwenbo99.github.io/leavehomesafer/>

本程式名待定，現時臨時名稱為 CLeaveHomeSafe，即「與安心出行相容」。不應與「安心出行」混淆。


## 如何使用？

- 按 'Enter' 以進入
- 掃 QR Code
- 檢視處所名，若錯誤，則人手改正。 
- 按勾以記錄。_因技術限制_，記錄保存機制並非自動。離開時，按下 'Leave'。 


## Acknowledgements

### UI 

The UI is inherited directly from <https://github.com/bartertone/leavehomesafer>.  I am not the one who design the UI, and take no responsibility of the UI contents.  I use their project only because there does not exist better alternatives.

### We use the following libraries

- <https://github.com/nimiq/qr-scanner> 

### Special thanks from bartertone

* <https://github.com/academind/yt-example-pwa/tree/final>
* <https://github.com/dcode-youtube/getting-started-pwa>
* <https://github.com/abenjamin765/camera-app>



## Disclaimer

This project is only used for practicing JavaScript programming and to demonstrate the possibility of implementing a useless app using browser only. 


[egn20212543106]: https://www.gld.gov.hk/egazette/pdf/20212543e/egn20212543106.pdf
