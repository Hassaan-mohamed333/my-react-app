import React, { useEffect, useState } from 'react';
import styles from "./Categories.module.css";

export default function Categories() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // يمكنك إضافة منطق الـ useEffect هنا
  }, []);

  return (
    <div className={styles.container}> {/* استخدام CSS Module هنا */}
      <h2 className='text-3xl text-red-500'>Categories</h2>
    </div>
  );
}