import React from 'react'

import PageTemplate from '../components/Template/PageTemplate'

const MainPage = () => {
  return (
    <PageTemplate>
      <section 
        className='container' 
        style={{minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '48px'}}>
        <div>Тестовая работа Амангельди</div>
        <div>Телеграм: @rossoneri98</div>
      </section>
    </PageTemplate>
  )
}

export default MainPage