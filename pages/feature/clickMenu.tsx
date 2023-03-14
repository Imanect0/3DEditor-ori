import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import THREE, {Object3D, Raycaster, Vector2} from "three";
import Button from "@material-ui/core/Button";
import {type} from "os";
type ClickMenu = {
    isObjectPointed: boolean;
    objects: Object3D[];
}

const ClickMenu: FC<ClickMenu> = (props) => {
    // クリックされたオブジェクトはprops.objectsに入っている
    const [menuPosition, updateMenuPosition] = useState(new Vector2(0, 0));
    const [menuVisibility, setMenuVisibility] = useState<boolean>();
    const [objectsCash, updateObjectsCash] = useState(props.objects);
    const menuSize = new Vector2(convertRemToPx(8), convertRemToPx(16));

    useEffect(() => setMenuVisibility(true), [])

    //再レンダリングより先にイベントが実行されるみたい
    const clickEvent = (event: MouseEvent) => {
        updateObjectsCash((prevState) => {
            setMenuVisibility(prevState !== props.objects);
            return props.objects;
        });

        const cursorPosition = new Vector2(scrollX + event.x, scrollY + event.y)
        const clientDisplaySize: Vector2 = getClientDisplaySize();
        const menuRightBottomPosition = new Vector2(cursorPosition.x + menuSize.x, cursorPosition.y + menuSize.y)
        updateMenuPosition(new Vector2(
            // メニューの右端が表示領域右端よりも左ならカーソル右に表示、そうでなければ(メニュー右側が画面に収まりきらなければ)カーソル左に表示する
            menuRightBottomPosition.x < clientDisplaySize.x + scrollX ? cursorPosition.x  + 8 : cursorPosition.x - menuSize.x - 48,
            // 上と同様
            menuRightBottomPosition.y < clientDisplaySize.y + scrollY ? cursorPosition.y  + 16 : cursorPosition.y - menuSize.y + 96
        ));
    }

    useEffect(() => {
        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.addEventListener('click', clickEvent);
        }
    }, []);


    if (typeof document !== 'undefined') {
        // alert(menuVisibility)
    }
    return (
        <>
            <div id={'click_menu'}
                 style={{
                     left: menuPosition.x,
                     top: menuPosition.y,
                     visibility: props.isObjectPointed ? 'visible' : 'hidden'
            }}>
                <Button fullWidth={true} variant="outlined" size={'large'}>comment</Button>
                <Button fullWidth={true} variant="outlined" size={'large'}>move</Button>
                <Button fullWidth={true} variant="outlined" size={'large'}>rotate</Button>
                <Button fullWidth={true} variant="outlined" size={'large'}>scale</Button>
            </div>
            <style jsx>{`
              #click_menu {
                position: absolute;
                border: black solid 2px;
                height: fit-content;
                width: 8rem;
                border-radius: 8px;
              }
            `}</style>
        </>
    );
}
export default ClickMenu;

function convertRemToPx(rem: number) {
    if (typeof document !== 'undefined'){
        const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        return rem * fontSize;
    }
}

function getClientDisplaySize(): Vector2 {
    if (typeof document !== 'undefined'){
        const clientDisplayWidth = document.documentElement.clientWidth;
        const clientDisplayHeight = document.documentElement.clientHeight;
        return new Vector2(clientDisplayWidth, clientDisplayHeight)
    }
    return new Vector2(0, 0)
}
