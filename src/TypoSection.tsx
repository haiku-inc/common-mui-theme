import { Alert, Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

const TypoSection = () => (
  <Box className="flex flex-col gap-5 mt-0 mb-96 p-10">
    <Box className="flex gap-5">
      <Alert
        severity="info"
        className="max-w-[550px]"
      >
        <strong>Mobile-play not yet supported</strong>
        <p>
          Please note while the World of Haiku game is not yet mobile-friendly, you can still sign up and purchase the
          game process on mobile.
        </p>
      </Alert>

      <Alert
        severity="success"
        className="max-w-[550px]"
      >
        <strong>Mobile-play not yet supported</strong>
        <p>
          Please note while the World of Haiku game is not yet mobile-friendly, you can still sign up and purchase the
          game process on mobile.
        </p>
      </Alert>

      <Alert
        severity="warning"
        className="max-w-[550px]"
      >
        <strong>Mobile-play not yet supported</strong>
        <p>
          Please note while the World of Haiku game is not yet mobile-friendly, you can still sign up and purchase the
          game process on mobile.
        </p>
      </Alert>

      <Alert
        severity="error"
        className="max-w-[550px]"
      >
        <strong>Mobile-play not yet supported</strong>
        <p>
          Please note while the World of Haiku game is not yet mobile-friendly, you can still sign up and purchase the
          game process on mobile.
        </p>
      </Alert>
    </Box>

    <FontsTable />
  </Box>
);

const FontsTable = () => (
  <TableContainer component={Paper}>
    <Table
      sx={{ minWidth: 650 }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          <TableCell>Style</TableCell>
          <TableCell>Font size</TableCell>
          <TableCell>Sample</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component="th"
            scope="row"
          >
            <Typography
              component="h1"
              variant="h1"
            >
              h1
            </Typography>
          </TableCell>
          <TableCell>96</TableCell>
          <TableCell>
            <Typography
              component="h1"
              variant="h1"
            >
              Typography
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component="th"
            scope="row"
          >
            <Typography
              component="h2"
              variant="h2"
            >
              h2
            </Typography>
          </TableCell>
          <TableCell>60</TableCell>
          <TableCell>
            <Typography
              component="h2"
              variant="h2"
            >
              Typography
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component="th"
            scope="row"
          >
            <Typography
              component="h3"
              variant="h3"
            >
              h3
            </Typography>
          </TableCell>
          <TableCell>48</TableCell>
          <TableCell>
            <Typography
              component="h3"
              variant="h3"
            >
              Typography
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component="th"
            scope="row"
          >
            <Typography
              component="h4"
              variant="h4"
            >
              h4
            </Typography>
          </TableCell>
          <TableCell>34</TableCell>
          <TableCell>
            <Typography
              component="h4"
              variant="h4"
            >
              Typography
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component="th"
            scope="row"
          >
            <Typography
              component="h5"
              variant="h5"
            >
              h5
            </Typography>
          </TableCell>
          <TableCell>24</TableCell>
          <TableCell>
            <Typography
              component="h5"
              variant="h5"
            >
              Typography
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component="th"
            scope="row"
          >
            <Typography
              component="h6"
              variant="h6"
            >
              h6
            </Typography>
          </TableCell>
          <TableCell>20</TableCell>
          <TableCell>
            <Typography
              component="h6"
              variant="h6"
            >
              Typography
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component="th"
            scope="row"
          >
            <Typography variant="subtitle1">subtitle1</Typography>
          </TableCell>
          <TableCell>16</TableCell>
          <TableCell>
            <Typography variant="subtitle1">Typography</Typography>
          </TableCell>
        </TableRow>

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component="th"
            scope="row"
          >
            <Typography variant="subtitle2">subtitle2</Typography>
          </TableCell>
          <TableCell>14</TableCell>
          <TableCell>
            <Typography variant="subtitle2">Typography</Typography>
          </TableCell>
        </TableRow>

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component="th"
            scope="row"
          >
            <Typography variant="body1">body1</Typography>
          </TableCell>
          <TableCell>16</TableCell>
          <TableCell>
            <Typography variant="body1">Typography</Typography>
          </TableCell>
        </TableRow>

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component="th"
            scope="row"
          >
            <Typography variant="body2">body2</Typography>
          </TableCell>
          <TableCell>14</TableCell>
          <TableCell>
            <Typography variant="body2">Typography</Typography>
          </TableCell>
        </TableRow>

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component="th"
            scope="row"
          >
            <Typography variant="caption">caption</Typography>
          </TableCell>
          <TableCell>12</TableCell>
          <TableCell>
            <Typography variant="caption">Typography</Typography>
          </TableCell>
        </TableRow>

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component="th"
            scope="row"
          >
            <Typography variant="overline">overline</Typography>
          </TableCell>
          <TableCell>12</TableCell>
          <TableCell>
            <Typography variant="overline">Typography</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export default TypoSection;
