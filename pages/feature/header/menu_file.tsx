import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { ObjectsContext } from '../../editor/dataContainer';
import MeshLoader from '../../editor/Loader';

export default function File(props: { name: string }) {
  const { objects, addObjects } = React.useContext(ObjectsContext)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const import3dObject = async (loadedFile: File) => {
    const meshLoader = new MeshLoader()
    const object = await meshLoader.loadFile(loadedFile);
    console.log(object)
    addObjects(object)
  }

  const inputRef = React.useRef<HTMLInputElement>(null)
  const clickImportMenu = () => {
    inputRef.current?.click()
    handleClose()
  }

  return (
    <div>
      <input type='file'
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={(e) => {
          console.log('onchange input')
          e.target.files?.length != null ? import3dObject(e.target.files[0]) : e
        }} />
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        //ボタンのスタイル
        style={{
          background: "blue",
          color: "white"
        }}
      >
        {props.name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}

        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Reset</MenuItem>
        <MenuItem onClick={clickImportMenu}>Import</MenuItem>
        <MenuItem onClick={handleClose}>Export</MenuItem>
      </Menu>
    </div>
  );
}
