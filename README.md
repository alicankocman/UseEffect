# UseEffect
### UseEffect react'ta yan etkileri(Side Effects) yönetmek için kullanılan hooktur.
## Yan Etki Nedir?
* Veri fetch etme (API cagrilari)
* DOM manipülasyonu
* Timer veya event Listener ayarlari gibi bilesen disinda gerceklesen islemler
  
# Temel Kullanim
```jsx
useEffect(() => {
  // Yapılacak işlemler
}, [dependencies]);

```
* Bagimlilik Dizisi ( [] ):
* Boş: Sadece bileşen ilk kez yüklendiğinde çalışır.
* Belirli Değerler: Sadece bu değerler değiştiğinde çalışır.
* Dizisiz: Her render'da çalışır.
  
Kısaca: useEffect, bileşenin yaşam döngüsündeki işlemleri kontrol etmek için kullanılır.

```jsx

import React,{useEffect, useState} from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    const[amount,setAmount]=useState(1);

    useEffect(()=>{
        // console.log("Bir State Degisti.")
    })
    
    useEffect(()=>{
        console.log("Component Mount Edildi.")
    },[])
    
    useEffect(()=>{
        console.log("Count State Degisti.")
    },[count])  

    useEffect(()=>{
        console.log("Amount State Degisti.")
    },[amount])


  return (
    <div style={{textAlign:"center"}}>
        <h1>Total Count</h1>
        {count}
        <div>
      <button onClick={()=>setCount((prev)=>prev+amount)}>Arttirma</button>
    </div>
    <hr/>
    <button onClick={()=>setAmount(1)}>+1</button>
    <button onClick={()=>setAmount(3)}>+3</button>
    <button onClick={()=>setAmount(10)}>+10</button>
    </div>
  )
}

export default Counter

```
# React useEffect Kullanımı: Kısa Açıklamalar
## 1.Tüm State'lerin Takibi

```jsx
useEffect(() => {
  console.log("Bir State Degisti.")
})

```
* Amaç: Herhangi bir state değişikliğinde çalışır.
* Kullanım: Tüm render işlemlerini izlemek.

## 2.Component Mount

```jsx
useEffect(() => {
    console.log("Component Mount Edildi.")
}, [])

```
* Amaç: Bileşen ilk kez yüklendiğinde bir kez çalışır.
* Kullanım: Başlangıç işlemleri için.

## 3.Count State Takibi

```jsx
useEffect(() => {
    console.log("Count State Degisti.")
}, [count])

```
* Amaç: Sadece count değiştiğinde çalışır.
* Kullanım: Belirli bir state'e özel yan etkiler.

## 4.Amount State Takibi

```jsx
useEffect(() => {
    console.log("Amount State Degisti.")
}, [amount])
```
* Amaç: Sadece amount değiştiğinde çalışır.
* Kullanım: Başka bir state'e özel yan etkiler.

## UseEffect ve Interval Kullanımı
### UseEffect, React bileşeni render edildikten sonra çalışacak yan etkileri yönetmek için kullanılır. Aşağıdaki örnekte, useEffect interval başlatmak için kullanılmıştır.

``` jsx
import React,{useEffect, useState} from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    const[amount,setAmount]=useState(1);

    
    useEffect(()=>{
        console.log("Component Mount Edildi.")
    },[])
    
  useEffect(()=>{
    let interval= setInterval(()=>{
      console.log('Interval');
      setCount(prev=>prev+1);
    },1000)
    return () => clearInterval(interval)
  },[])

  return (
    <div style={{textAlign:"center"}}>
        <h1>Total Count</h1>
        {count}
        <div>
      <button onClick={()=>setCount((prev)=>prev+amount)}>Arttirma</button>
    </div>
    <hr/>
    <button onClick={()=>setAmount(1)}>+1</button>
    <button onClick={()=>setAmount(3)}>+3</button>
    <button onClick={()=>setAmount(10)}>+10</button>
    </div>
  )
}

export default Counter
```
* İlk useEffect çağrısı sadece bileşen ilk kez mount (yerleştiğinde) olduğunda çalışır ([] bağımlılıklar dizisi ile).
* setInterval, her 1000 ms (1 saniye) aralıkla setCount fonksiyonunu çağırarak sayacı artırır.
* return içindeki clearInterval fonksiyonu, bileşen unmount olduğunda interval'ı temizler, böylece bellek sızıntılarını engeller.

