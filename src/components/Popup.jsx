import './css/Popup.css'
const Popup =({temp, closeBtn})=>{

    const clotheList =()=>{
        if(temp<4){
            return(
                <ul>
                    <li>패딩</li>
                    <li>두꺼운 코트</li>
                    <li>누빔 옷</li>
                    <li>기모</li>
                    <li>목도리</li>
                </ul>
            )
        }else if (temp>=4 && temp <9){
            return(
                <ul>
                    <li>울 코트</li>
                    <li>히트텍</li>
                    <li>가죽 옷</li>
                    <li>기모</li>
                </ul>
            )
        }else if (temp>=9 && temp <11){
            return(
                <ul>
                    <li>트렌치코트</li>
                    <li>야상</li>
                    <li>점퍼</li>
                    <li>스타킹</li>
                    <li>기모바지</li>
                </ul>
            )
        }else if (temp>=11 && temp <16){
            return(
                <ul>
                    <li>자켓</li>
                    <li>가디건</li>
                    <li>청자켓</li>
                    <li>니트</li>
                    <li>스타킹</li>
                    <li>청바지</li>
                </ul>
            )
        }else if (temp>=16 && temp <19){
            return(
                <ul>
                    <li>얇은 가디건이나 니트</li>
                    <li>맨투맨</li>
                    <li>후드</li>
                    <li>긴바지</li>
                </ul>
            )
        }else if (temp>=19 && temp <22){
            return(
                <ul>
                    <li>블라우스</li>
                    <li>긴소매티</li>
                    <li>면바지</li>
                    <li>슬랙스</li>
                </ul>
            )
        }else if (temp>=22 && temp <27){
            return(
                <ul>
                    <li>반소매</li>
                    <li>얇은 셔츠</li>
                    <li>면바지</li>
                    <li>반바지</li>
                </ul>
            )
        }else if (temp>=27){
            return(
                <ul>
                    <li>민소매</li>
                    <li>반소매</li>
                    <li>반바지</li>
                    <li>짧은 치마</li>
                    <li>린넨 옷</li>
                </ul>
            )
        }
    }
    return(
        <div className="PopupBg">
            <div className="popupBox">
                <div className="popupHeader">
                    <h4>기온별 옷차림</h4>
                <div className="btnClose" onClick={closeBtn}>
                    <span></span>
                </div>
                </div>
                <div className="popupCon">
                    {clotheList()}
                </div>
            </div>
        </div>
    )
}

export default Popup;