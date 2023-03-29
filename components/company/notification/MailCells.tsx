import Button_1 from '@/components/ui/Button_1'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

const sendBtnProps = {
  Icon: AiOutlineMail,
  name: 'send',
  color: '#047857',
}

export default function MailCells({ title }) {
  return (
    <>
      <div>
        <input type="checkbox" />
      </div>
      <div>{title}</div>
      <div>
        <Button_1 {...sendBtnProps} />
      </div>
    </>
  )
}
