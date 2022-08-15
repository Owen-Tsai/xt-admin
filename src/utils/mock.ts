const debug = import.meta.env.DEV

export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
  if (mock !== false && debug) setup()
}

export const responseWrap = (data: unknown) => ({
  data,
  success: true,
  code: 20000
})

export const failedResponseWrap = (data: unknown, msg: string, code = 500) => ({
  data,
  success: false,
  msg,
  code
})
