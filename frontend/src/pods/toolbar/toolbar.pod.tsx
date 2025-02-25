import React from 'react';
import {
  // CanvasSettingButton,
  ZoomInButton,
  ZoomOutButton,
  RelationButton,
  AddCollection,
  ThemeToggleButton,
  ExportButton,
  NewButton,
  OpenButton,
  SaveButton,
  UndoButton,
  RedoButton,
  DeleteButton,
  CanvasSettingButton,
  CopyButton,
  PasteButton,
} from './components';
import classes from './toolbar.pod.module.css';
import {
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
} from '@clerk/clerk-react';

export const ToolbarPod: React.FC = () => {
  return (
    <header className={classes.container}>
      <div>
        <NewButton />
        <OpenButton />
        <SaveButton />
        <ZoomInButton />
        <ZoomOutButton />
        <AddCollection />
        <RelationButton />
        <CopyButton />
        <PasteButton />
        <UndoButton />
        <RedoButton />
        <ExportButton />
        <DeleteButton />
        <CanvasSettingButton />
        <ThemeToggleButton darkLabel="Dark Mode" lightLabel="Light Mode" />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
