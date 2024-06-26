import React, { FC } from "react"

interface AuthenticatedProps {
  userDiscordId: string
}

const Authenticated: FC<AuthenticatedProps> = ({
  userDiscordId,
}): JSX.Element => {
  return (
    <div>
      <p>Authenticated</p>
      <p>Your Discord id: {userDiscordId}</p>
      <p>Claim coming soon</p>
    </div>
  )
}

export default Authenticated
