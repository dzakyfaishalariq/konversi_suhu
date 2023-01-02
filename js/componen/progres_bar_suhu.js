export const progres = (C, R, F, K) => {
  let pC, pR, pF, pK;
  pC = C;
  pR = (R * 100) / 80;
  pF = ((F - 32) * 100) / (212 - 32);
  pK = ((K - 273) * 100) / (373 - 273);
  return /* html */ `
    <div class="row">
    <div class="col-md-10">
        <div
        class="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="${pC}"
        aria-valuemin="0"
        aria-valuemax="100"
        >
        <div class="progress-bar" style="width: ${pC}%">${C} C</div>
        </div>
    </div>
    <div class="col-md-2">
        <p>C</p>
    </div>
    <div class="col-md-10">
        <div
        class="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="${pR}"
        aria-valuemin="0"
        aria-valuemax="100"
        >
        <div class="progress-bar" style="width: ${pR}%">${R} R</div>
        </div>
    </div>
    <div class="col-md-2">
        <p>R</p>
    </div>
    <div class="col-md-10">
        <div
        class="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="${pF}"
        aria-valuemin="0"
        aria-valuemax="100"
        >
        <div class="progress-bar" style="width: ${pF}%">${F} F</div>
        </div>
    </div>
    <div class="col-md-2">
        <p>F</p>
    </div>
    <div class="col-md-10">
        <div
        class="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="${pK}"
        aria-valuemin="0"
        aria-valuemax="100"
        >
        <div class="progress-bar" style="width: ${pK}%">${K} K</div>
        </div>
    </div>
    <div class="col-md-2">
        <p>K</p>
    </div>
    </div>  
  `;
};
