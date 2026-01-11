// SPDX-License-Identifier: LicenseRef-PGSCTF-Restricted
// Copyright (C) 2026 FlagForge
// Restricted Component - NOT under AGPLv3.
// See licenses/LicenseRef-PGSCTF-Restricted.txt
import { Anchor, Text } from '@mantine/core'
import { FC } from 'react'

interface CopyrightProps {
  isMobile?: boolean
}

export const Copyright: FC<CopyrightProps> = ({ isMobile }) => {
  const currentYear = new Date().getFullYear()

  return (
    <Text size="sm" ta="center" fw={400} c="dimmed">
      Copyright&nbsp;©&nbsp;{currentYear}&nbsp;
      {isMobile && <br />}
      <Anchor href="https://github.com/flagforgeCTF" c="dimmed" size="sm" fw={500}>
        @FlagForge
      </Anchor>
      ,&nbsp;All&nbsp;Rights&nbsp;Reserved.
    </Text>
  )
}
