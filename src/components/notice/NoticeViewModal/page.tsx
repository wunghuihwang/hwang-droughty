import { useNoticetore } from '@/store/useNoticeStore';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import dayjs from 'dayjs';

const NoticeViewModal = () => {
    const { currentNotice, viewOpen, setViewOpen } = useNoticetore();
    return (
        <Dialog open={viewOpen} onClose={() => setViewOpen(false)} maxWidth="md" fullWidth>
            <DialogTitle>{currentNotice?.title}</DialogTitle>
            <DialogContent dividers>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                        작성자: {currentNotice?.author_name} | 작성일:{' '}
                        {dayjs(currentNotice?.created_at).format('YYYY-MM-DD hh:mm:ss')}
                    </Typography>
                </Box>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                    {currentNotice?.content}
                </Typography>
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
                <Button onClick={() => setViewOpen(false)} variant="contained">
                    닫기
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NoticeViewModal;
