'use strict';

function quoteContract(task, vendor, availableBudget) {
  const total = vendor.total ?? vendor.unit * task.qty;
  const excess = Math.max(0, total - task.limit);
  const special = Boolean(vendor.specialProcurement && excess);
  const agencyShare = special ? total - excess : 0;
  const supportShare = special ? excess : 0;
  const operatingShare = total;

  let reason = '';
  if (!vendor.safe) reason = '안전 기준 부적합으로 계약할 수 없습니다.';
  else if (excess && !special) reason = '기관 요청 한도를 초과합니다.';
  else if (operatingShare > availableBudget) reason = '남은 운영 예산이 부족합니다.';

  return { total, special, agencyShare, supportShare, operatingShare, reason };
}
