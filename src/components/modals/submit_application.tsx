"use client"
import { memo, useCallback, useState } from "react"
import type {ChangeEvent, FC, ReactNode,} from "react"
import { IFormSumbitInputValue } from "~/types/formInputType"
import "~/style/components/modals.scss"
type TypeModalSubmitApplication = {
  status: string;
  setChangeStatus:()=>void
}
type TypeErrorInputValue = {
  area: boolean,
  address: boolean,
  fio: boolean,
  phone_number: boolean,
  email: boolean,
}

export const ModalSubmitApplication:FC<TypeModalSubmitApplication> = memo(({status, setChangeStatus}):ReactNode => {
  const [errorValueInputForm, setErrorValueInputForm] = useState<TypeErrorInputValue>({
    area: false,
    address: false,
    fio: false,
    phone_number: false,
    email: false,
  });
  const [valueInputForm, setValueInputForm] = useState<IFormSumbitInputValue>({
    area: "DEFAOULT",
    address: "",
    fio:"",
    phone_number: "",
    cheked_wifi_router: false,
    email:"",
    methods_about: "не указал"
  })
  const handleChangeStatus = useCallback(setChangeStatus, [status]);
  const handleFormInputValue = useCallback((e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
    setValueInputForm({...valueInputForm, [e.target.name]: e.target.value})
  },[]);

  const handleSubmitApplication = () => {
    if(valueInputForm.area === "DEFAOULT") setErrorValueInputForm({...errorValueInputForm, area: true});
    if(valueInputForm.address.length < 5) setErrorValueInputForm({...errorValueInputForm, address: true});
    if(valueInputForm.fio.length < 8) setErrorValueInputForm({...errorValueInputForm, fio: true});
    if(valueInputForm.phone_number.length < 9) setErrorValueInputForm({...errorValueInputForm, phone_number: true});
    if(!valueInputForm.email.includes("@")) setErrorValueInputForm({...errorValueInputForm, email: true});
  }

  
  

  return (
    <section id="modal_window_submit_application" 
    className={`modal_window_submit_application${status}`} 
    onClick={handleChangeStatus}>
      <div className="_contant" onClick={(e )=>e.stopPropagation()}>
        <div className="container">
          <h2>Оставить заявку</h2>
          <h3>После получения заявки наш оператор <br /> свяжется с Вами в ближайшее время (с 9:00 до 21:00).</h3>
          <div className="_form_submit_applicatio">
              <label className="_form_input">
                Область
                <select value={valueInputForm.area} onChange={handleFormInputValue} name="area">
                  <option value="DEFAOULT" disabled>Выберите вариант</option>
                  <option value="Чуй">Чуйская область</option>
                  <option value="Иссык-Куль">Иссык-Кульcкая область</option>
                  <option value="Ош">Ошская область</option>
                  <option value="Баткен">Баткенская область</option>
                </select>
              </label>
              <label className="_form_input">
                Адрес
                <input value={valueInputForm.address} onChange={handleFormInputValue} name="address" title="" type="text" placeholder="Адрес.." />
              </label>
              <label className="_form_input">
                Фамилия Имя Отчество
                <input value={valueInputForm.fio} onChange={handleFormInputValue} name="fio" type="text" placeholder="ФИО" />
              </label>
              <label className="_form_input">
                Номер телефона
                <input value={valueInputForm.phone_number} onChange={handleFormInputValue} name="phone_number" type="number" placeholder="+996 000 000 00" />
              </label>
              <label className="_form_input">
                Email
                <input value={valueInputForm.email} onChange={handleFormInputValue} name="email" type="email" placeholder="exempla@mail.com" />
              </label>
              <label className="_form_checkbox">
                <input type="checkbox" onChange={(e)=> setValueInputForm({...valueInputForm, cheked_wifi_router : !valueInputForm.cheked_wifi_router })} checked={valueInputForm.cheked_wifi_router} />
                Мне нужен Wi-Fi роутер
              </label>
              <label >
                Откуда вы о нас узнали?
                <select onChange={handleFormInputValue}  name="methods_about" defaultValue="не указал">
                  <option value="не указал" disabled selected>Выберите вариант</option>
                  <option value="на телевизоре">Реклама на TV</option>
                  <option value="в интернете">Реклама в интернете</option>
                  <option value="на радио">Реклама на радио</option>
                  <option value="наружная реклама">Наружная реклама</option>
                  <option value="реклама на подъездах">Реклама на подъездах</option>
                  <option value="знакомые">От знакомых</option>
                </select>
              </label>
              
              <button onClick={handleSubmitApplication} >Отправить</button>
          </div>
        </div>
      </div>
    </section>
  )
})
