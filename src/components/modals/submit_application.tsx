import { memo, useCallback } from "react"
import type {FC, ReactNode,} from "react"
type TypeModalSubmitApplication = {
  status: boolean;
  setChangeStatus:()=>void
}

export const ModalSubmitApplication:FC<TypeModalSubmitApplication> = memo(({status, setChangeStatus}):ReactNode => {
  const handleChangeStatus = useCallback(setChangeStatus, [status])
  return (
    <section id="modal_window_submit_application" 
    className={`modal_window_submit_application ${status && "active"}`} 
    onClick={handleChangeStatus}>
      <div className="_contant" onClick={(e )=>e.stopPropagation()}></div>
    </section>
  )
})
