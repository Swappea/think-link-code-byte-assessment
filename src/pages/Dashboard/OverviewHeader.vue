<template>
  <div class="d-flex justify-content-between align-items-center overview-container">
    <h2>Overview</h2>
    <button type="button" class="btn">
      <img src="../../assets/add-button.svg" alt="add button" height="16" width="16" />
      ADD NEW WINE
    </button>
  </div>
</template>

<style scoped>
.overview-container h2 {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #8c8ca1;
}

.overview-container button {
  background: #ef4859;
  border-radius: 4px;
  width: 185px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;

  color: #fafcfe;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.06em;
  font-weight: 700;
}
</style>
