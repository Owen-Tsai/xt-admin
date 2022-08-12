/**
 * 本文件包含项目中所使用的各项公共配置
 */
import {
  FileEditFill,
  MailFill,
  ClipboardFill
} from '@salmon-ui/icons'

export type UserRole = '' | '*' | 'admin' | 'user'
export interface HTTPResponse<T = unknown> {
  data: T;
  status: number;
  msg: string;
  code: number;
}

export const requestBaseUrl = import.meta.env.BASE_URL || ''

export const menuFromServer = false

export const menuWidth = 240

export const noticeTypeMap = [
  {
    type: 'report',
    icon: FileEditFill,
    bg: '#f43f5e'
  },
  {
    type: 'normal',
    icon: MailFill,
    bg: '#3b82f6'
  },
  {
    type: 'audit',
    icon: ClipboardFill,
    bg: '#f59e0b'
  }
]

export const namesRouteCached: string[] = []
