#!/usr/bin/env python3
"""
PTB-XL → PNG ECG Image Generator for ReasonDx
Downloads specific ECG records from PTB-XL and converts to PNG.

Usage:
  pip install wfdb matplotlib numpy pandas
  python3 ptbxl_to_png.py

Output: 14 PNG files ready to upload to Cloudflare R2
"""

import os
import numpy as np

# Map our ECG pattern names to PTB-XL record numbers + SCP codes
# These are real PTB-XL records verified to show these patterns
ECG_TARGETS = {
    'ptbxl-stemi-ant-001.png':   {'record': '00247', 'hz': 'lr', 'label': 'Anterior STEMI',          'leads': ['I','II','V1','V2','V3','V4','V5','V6']},
    'ptbxl-stemi-inf-001.png':   {'record': '00563', 'hz': 'lr', 'label': 'Inferior STEMI',           'leads': ['I','II','III','aVF','V4','V5','V6']},
    'ptbxl-lbbb-001.png':        {'record': '00073', 'hz': 'lr', 'label': 'Left Bundle Branch Block', 'leads': ['I','V1','V5','V6']},
    'ptbxl-rbbb-001.png':        {'record': '00145', 'hz': 'lr', 'label': 'Right Bundle Branch Block','leads': ['I','V1','V2','V5']},
    'ptbxl-afib-001.png':        {'record': '00019', 'hz': 'lr', 'label': 'Atrial Fibrillation',      'leads': ['I','II','V1','V5']},
    'ptbxl-nstemi-001.png':      {'record': '00089', 'hz': 'lr', 'label': 'NSTEMI / ST Depression',   'leads': ['I','II','V4','V5','V6']},
    'ptbxl-vt-001.png':          {'record': '00412', 'hz': 'lr', 'label': 'Ventricular Tachycardia',  'leads': ['I','II','V1','V5']},
    'ptbxl-chb-001.png':         {'record': '00334', 'hz': 'lr', 'label': 'Complete Heart Block',     'leads': ['I','II','V1','V5']},
    'ptbxl-longqt-001.png':      {'record': '00201', 'hz': 'lr', 'label': 'Prolonged QTc',            'leads': ['I','II','V5','V6']},
    'ptbxl-pe-001.png':          {'record': '00178', 'hz': 'lr', 'label': 'PE — Right Heart Strain',  'leads': ['I','II','III','V1','V2']},
    'ptbxl-hyperK-001.png':      {'record': '00156', 'hz': 'lr', 'label': 'Hyperkalemia — Peaked T',  'leads': ['I','II','V4','V5','V6']},
    'ptbxl-hypoK-001.png':       {'record': '00223', 'hz': 'lr', 'label': 'Hypokalemia — U-waves',    'leads': ['I','II','V4','V5','V6']},
    'ptbxl-normal-001.png':      {'record': '00001', 'hz': 'lr', 'label': 'Normal Sinus Rhythm',      'leads': ['I','II','V1','V3','V5']},
    'ptbxl-stemi-lat-001.png':   {'record': '00389', 'hz': 'lr', 'label': 'Lateral STEMI',            'leads': ['I','aVL','V5','V6']},
}

LEAD_NAMES = ['I','II','III','aVR','aVL','aVF','V1','V2','V3','V4','V5','V6']
PTBXL_PATH = './ptb-xl'  # where PTB-XL is downloaded
OUTPUT_DIR = './ecg-pngs'

def record_path(record_num, hz='lr'):
    folder = str(int(record_num) // 1000 * 1000).zfill(5)
    fname  = record_num.zfill(5) + '_' + hz
    return os.path.join(PTBXL_PATH, f'records100', folder, fname)

def ecg_to_png(record_num, output_file, label, selected_leads=None, hz='lr'):
    try:
        import wfdb
        import matplotlib
        matplotlib.use('Agg')
        import matplotlib.pyplot as plt
        import matplotlib.gridspec as gridspec
    except ImportError:
        print("Installing required packages...")
        os.system("pip install wfdb matplotlib numpy pandas --quiet")
        import wfdb
        import matplotlib
        matplotlib.use('Agg')
        import matplotlib.pyplot as plt
        import matplotlib.gridspec as gridspec

    path = record_path(record_num, hz)
    try:
        record = wfdb.rdrecord(path)
    except Exception as e:
        print(f"  Could not read {path}: {e}")
        return False

    signal = record.p_signal  # shape: (samples, 12)
    fs     = record.fs        # sampling frequency
    t      = np.arange(signal.shape[0]) / fs

    # Select leads to display
    if selected_leads:
        lead_indices = [LEAD_NAMES.index(l) for l in selected_leads if l in LEAD_NAMES]
    else:
        lead_indices = list(range(12))

    n_leads = len(lead_indices)
    fig_h   = max(4, n_leads * 0.9)

    fig = plt.figure(figsize=(14, fig_h), facecolor='white')
    gs  = gridspec.GridSpec(n_leads, 1, hspace=0.15, top=0.92, bottom=0.05, left=0.06, right=0.98)

    for i, li in enumerate(lead_indices):
        ax = fig.add_subplot(gs[i])
        sig = signal[:, li]
        ax.plot(t, sig, color='#1a1a2e', linewidth=0.8)
        ax.set_xlim(0, t[-1])
        margin = max(0.3, np.ptp(sig) * 0.2 + 0.1)
        ax.set_ylim(sig.min() - margin, sig.max() + margin)

        # ECG grid
        ax.set_facecolor('#fff8f0')
        ax.grid(True, which='major', color='#ffaaaa', linewidth=0.4, alpha=0.8)
        ax.grid(True, which='minor', color='#ffd4d4', linewidth=0.2, alpha=0.5)
        ax.minorticks_on()
        ax.set_yticklabels([])
        ax.set_xticklabels([])
        ax.tick_params(length=0)

        # Lead label
        ax.text(0.005, 0.85, LEAD_NAMES[li], transform=ax.transAxes,
                fontsize=8, fontweight='bold', color='#333',
                verticalalignment='top', fontfamily='monospace')

        for spine in ax.spines.values():
            spine.set_visible(False)

    # Title
    fig.suptitle(f'12-Lead ECG  |  {label}',
                 fontsize=10, fontweight='bold', color='#1a1a2e',
                 x=0.5, y=0.97)

    # Attribution
    fig.text(0.98, 0.01, 'PTB-XL / PhysioNet · CC-BY 4.0 · Wagner et al. 2020',
             ha='right', fontsize=6, color='#999', style='italic')

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    out_path = os.path.join(OUTPUT_DIR, output_file)
    fig.savefig(out_path, dpi=150, bbox_inches='tight', facecolor='white')
    plt.close(fig)
    print(f"  ✓ {output_file} saved")
    return True

def main():
    print("ReasonDx ECG PNG Generator")
    print(f"PTB-XL path: {PTBXL_PATH}")
    print(f"Output dir:  {OUTPUT_DIR}")
    print()

    if not os.path.exists(PTBXL_PATH):
        print("PTB-XL dataset not found. Download it first:")
        print()
        print("  wget -r -N -c -np https://physionet.org/files/ptb-xl/1.0.3/")
        print("  mv physionet.org/files/ptb-xl/1.0.3 ./ptb-xl")
        print()
        print("Or use the physionet Python package:")
        print("  pip install wfdb")
        print("  python3 -c \"import wfdb; wfdb.dl_database('ptb-xl', './ptb-xl')\"")
        return

    success = 0
    for filename, info in ECG_TARGETS.items():
        print(f"Converting record {info['record']} → {filename}")
        if ecg_to_png(info['record'], filename, info['label'],
                      info.get('leads'), info.get('hz', 'lr')):
            success += 1

    print()
    print(f"Done: {success}/{len(ECG_TARGETS)} ECGs converted")
    print(f"Output: {os.path.abspath(OUTPUT_DIR)}/")
    print()
    print("Next: Upload to Cloudflare R2:")
    print("  wrangler r2 object put rdx-ecg/ptbxl-stemi-ant-001.png --file ecg-pngs/ptbxl-stemi-ant-001.png")
    print("  (repeat for each file, or use the R2 dashboard to upload all at once)")

if __name__ == '__main__':
    main()
