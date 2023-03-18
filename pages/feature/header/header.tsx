import * as React from 'react';

import { Stack } from '@mui/material';

import File from "./menu_file"

export default function HeaderNav() {
    return(
        <Stack direction="row" spacing={1} id='header_nav'>
            <File
                name={"File"}
             />
            <File
                name={"Edit"}
             />
            <File
                name={"Template"}
             />
            <File
                name={"Setting"}
             />
        </Stack>
        
    )
}