# Customer Management App

โปรเจ็คเว็บแอปสำหรับจัดการข้อมูลลูกค้า (Customer Management)  
พัฒนาโดยใช้ **Angular 19** และ **Firebase Firestore**

---

## สรุปโปรเจ็ค

เว็บแอปนี้ช่วยให้คุณสามารถ:
- ดูรายการลูกค้าทั้งหมด
- เพิ่มลูกค้าใหม่
- แก้ไขข้อมูลลูกค้า

ใช้ Angular Standalone Components ร่วมกับ Firebase Firestore ทำให้ระบบเบาและทันสมัย

---

## เทคโนโลยีที่ใช้

- Angular 19 (Standalone Components)
- Firebase Firestore (ฐานข้อมูลแบบเรียลไทม์)
- Angular Router (สำหรับจัดการหน้าเว็บ)
- TypeScript

---

## โครงสร้างโปรเจ็ค

- **src/app/app.component.ts** - Root component ของแอป
- **src/app/customer-list/** - แสดงรายการลูกค้า (CustomerListComponent)
- **src/app/customer-form/** - ฟอร์มเพิ่ม/แก้ไขลูกค้า (CustomerFormComponent)
- **src/app/customer.service.ts** - บริการสำหรับติดต่อ Firebase Firestore
- **src/app/app.routes.ts** - กำหนดเส้นทาง URL ของเว็บ
- **src/environments/environment.ts** - ตั้งค่าคอนฟิก Firebase

---

## วิธีการใช้งาน

### 1. ติดตั้ง dependencies

```bash
npm install
