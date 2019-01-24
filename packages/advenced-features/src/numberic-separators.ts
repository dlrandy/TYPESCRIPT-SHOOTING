/*
在处理大数的时候，使用数字分隔符改善可读性
*/

const africaPop = 12_3456_7890;

export default class AmountInput {
  private static MAX_ALLOWED = 99_9999_9999;

  amount: number = 0;
  
  showTooltip(){
    setTimeout(() => {
      alert('ooo');
    }, 2_500);
  }

  formatMillion(){
    return this.amount / 1_000_000 + 'M';
  }
};




