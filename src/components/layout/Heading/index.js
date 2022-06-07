import React from 'react'

const Heading = ({
  level = 1,
  title
}) => {
  const Tag = `h${level}`

  return (
    <Tag>
      {title}
    </Tag>
  )
}

export default Heading
