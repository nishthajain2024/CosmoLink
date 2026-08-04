/* CosmoLink - Interactive Galaxy Canvas & MST Engine Simulation */

document.addEventListener('DOMContentLoaded', () => {
  initCosmicCanvas();
  initInteractions();
});

function initCosmicCanvas() {
  const canvas = document.getElementById('cosmoCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;
  
  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight || 380;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Generate galaxy cluster nodes
  const nodesCount = 65;
  const nodes = [];
  const clustersCount = 4;
  const clusterCenters = [];

  for (let c = 0; c < clustersCount; c++) {
    clusterCenters.push({
      x: Math.random() * (canvas.width - 100) + 50,
      y: Math.random() * (canvas.height - 100) + 50
    });
  }

  for (let i = 0; i < nodesCount; i++) {
    const cluster = clusterCenters[i % clustersCount];
    nodes.push({
      x: cluster.x + (Math.random() - 0.5) * 180,
      y: cluster.y + (Math.random() - 0.5) * 180,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2.5 + 1.5,
      redshift: (Math.random() * 0.5 + 0.1).toFixed(3),
      mass: (Math.random() * 10 + 1).toFixed(2) + ' ×10¹¹ M☉',
      color: i % 3 === 0 ? '#38bdf8' : (i % 3 === 1 ? '#818cf8' : '#c084fc')
    });
  }

  // Calculate Minimum Spanning Tree (Prim's Algorithm simulation)
  function getMSTEdges() {
    const inMST = new Array(nodes.length).fill(false);
    const edges = [];
    inMST[0] = true;

    while (edges.length < nodes.length - 1) {
      let minDist = Infinity;
      let u = -1, v = -1;

      for (let i = 0; i < nodes.length; i++) {
        if (inMST[i]) {
          for (let j = 0; j < nodes.length; j++) {
            if (!inMST[j]) {
              const dx = nodes[i].x - nodes[j].x;
              const dy = nodes[i].y - nodes[j].y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < minDist) {
                minDist = dist;
                u = i;
                v = j;
              }
            }
          }
        }
      }

      if (v !== -1) {
        inMST[v] = true;
        edges.push({ from: u, to: v, length: minDist });
      } else {
        break;
      }
    }
    return edges;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw deep space background grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Move nodes slightly for dynamic cosmic drift
    nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 20 || node.x > canvas.width - 20) node.vx *= -1;
      if (node.y < 20 || node.y > canvas.height - 20) node.vy *= -1;
    });

    const mstEdges = getMSTEdges();

    // Draw MST Filament Connections
    mstEdges.forEach(edge => {
      const n1 = nodes[edge.from];
      const n2 = nodes[edge.to];
      ctx.beginPath();
      ctx.moveTo(n1.x, n1.y);
      ctx.lineTo(n2.x, n2.y);

      // Glow effect for filament bridges
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#38bdf8';
      ctx.stroke();
      ctx.shadowBlur = 0;
    });

    // Draw Galaxy Nodes
    nodes.forEach(node => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = node.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    animationId = requestAnimationFrame(draw);
  }

  draw();
}

function initInteractions() {
  // Toast notifications / button feedback
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const txt = btn.innerText.trim();
      if (txt.includes('Upload') || txt.includes('Run') || txt.includes('Export') || txt.includes('Save')) {
        showToast(`Action Triggered: ${txt}`);
      }
    });
  });
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.innerText = `🌌 ${msg}`;
  toast.style.position = 'fixed';
  toast.style.bottom = '24px';
  toast.style.right = '24px';
  toast.style.background = 'rgba(15, 23, 42, 0.95)';
  toast.style.border = '1px solid rgba(56, 189, 248, 0.4)';
  toast.style.color = '#38bdf8';
  toast.style.padding = '12px 20px';
  toast.style.borderRadius = '10px';
  toast.style.fontFamily = 'Inter, sans-serif';
  toast.style.fontSize = '13px';
  toast.style.fontWeight = '600';
  toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5), 0 0 15px rgba(56, 189, 248, 0.3)';
  toast.style.zIndex = '9999';
  toast.style.transition = 'all 0.3s ease';

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
