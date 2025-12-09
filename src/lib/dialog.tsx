// lib/dialog.tsx
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { createRoot } from 'react-dom/client';

interface DialogOptions {
    title?: string; // optional로 변경
    content?: string;
    confirmText?: string;
    cancelText?: string;
    showCancelButton?: boolean;
    onConfirm?: () => void | Promise<void>;
    onCancel?: () => void;
}

class DialogInstance {
    private container: HTMLDivElement | null = null;
    private root: any = null;

    private init() {
        if (!this.container) {
            this.container = document.createElement('div');
            document.body.appendChild(this.container);
            this.root = createRoot(this.container);
        }
    }

    private render(options: DialogOptions) {
        this.init();

        const {
            title = '알림', // 기본값 설정
            content,
            confirmText = '확인',
            cancelText = '취소',
            showCancelButton = true,
            onConfirm,
            onCancel,
        } = options;

        const handleConfirm = async () => {
            if (onConfirm) {
                await onConfirm();
            }
            this.close();
        };

        const handleCancel = () => {
            if (onCancel) {
                onCancel();
            }
            this.close();
        };

        this.root.render(
            <Dialog
                open={true}
                onClose={handleCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    {showCancelButton && <Button onClick={handleCancel}>{cancelText}</Button>}
                    <Button onClick={handleConfirm} autoFocus>
                        {confirmText}
                    </Button>
                </DialogActions>
            </Dialog>,
        );
    }

    private close() {
        if (this.root) {
            this.root.render(null);
        }
    }

    // 확인만 있는 알림
    alert(options: DialogOptions) {
        this.render({
            title: '알림',
            ...options,
            showCancelButton: false,
        });
    }

    // 확인/취소 있는 확인창
    confirm(options: DialogOptions) {
        this.render({
            title: '확인',
            ...options,
            showCancelButton: true,
        });
    }

    // 성공 메시지
    success(options: DialogOptions) {
        this.render({
            ...options,
            title: options.title || '성공', // 덮어쓰지 않도록
            showCancelButton: false,
        });
    }

    // 에러 메시지
    error(options: DialogOptions) {
        this.render({
            ...options,
            title: options.title || '오류',
            showCancelButton: false,
        });
    }

    // 경고 메시지
    warning(options: DialogOptions) {
        this.render({
            ...options,
            title: options.title || '경고',
        });
    }
}

// Singleton 인스턴스 export
export default new DialogInstance();
