import React, {FC} from 'react';
import {Object3D, Vector2} from "three";
import {Button, Stack} from '@mui/material';

type ClickMenu = {
    activeObject: Object3D | null;
    cursorPosition: Vector2;
}

const ClickMenu: FC<ClickMenu> = (props) => {
    //クリックされたオブジェクトはeditor/index.tsxのactiveObjectにある
    const clientDisplaySize: Vector2 = getClientDisplaySize();
    const menuSize = new Vector2(convertRemToPx(8), convertRemToPx(16));
    const menuRightBottomPosition = new Vector2(props.cursorPosition.x + menuSize.x, props.cursorPosition.y + menuSize.y)
    let menuPosition = new Vector2(0, 0);

    if (typeof window !== 'undefined'){
        menuPosition = new Vector2(
            // メニューの右端が表示領域右端よりも左ならカーソル右に表示、そうでなければ(メニュー右側が画面に収まりきらなければ)カーソル左に表示する
            menuRightBottomPosition.x < clientDisplaySize.x + scrollX ? props.cursorPosition.x  + 12 : props.cursorPosition.x - menuSize.x + 20,
            // 上と同様に縦も
            menuRightBottomPosition.y < clientDisplaySize.y + scrollY ? props.cursorPosition.y  + 16 : props.cursorPosition.y - menuSize.y + 80
        );
    }




    const buttonProps = {
        // fullWidth: true,
        // variant: 'outlined',
        size: "large",
        sx: {
            width: '90%',
            margin: '0 auto',
            color: 'black',
            borderBottom: ' black solid 1px ',
            borderRadius: '0',
        },
    } as const;
    return (
        <>
            <Stack id={'click_menu'}
                sx={{
                    position: 'absolute',
                    border: ' black solid 2px ',
                    borderRadius: '8px',
                    left: menuPosition.x,
                    top: menuPosition.y,
                    visibility: props.activeObject ? 'visible' : 'hidden'
                }}>
                <Button {...buttonProps}>comment</Button>
                <Button {...buttonProps}>move</Button>
                <Button {...buttonProps}>rotate</Button>
                <Button {...buttonProps} sx={{...buttonProps.sx, borderBottom: 'none'}}>scale</Button>
            </Stack>
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
