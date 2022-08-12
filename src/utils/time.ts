import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import cn from 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale(cn)

type TimeType = string | number | Date

export const toNow = (time: TimeType) => dayjs(time).toNow()
export const fromNow = (time: TimeType) => dayjs(time).fromNow()
